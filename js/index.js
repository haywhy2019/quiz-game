const selectedQuestions = qAndA.sort(() => {
    return (Math.random() - Math.random())
}).slice(0, 5);


let score = 0;
let questionIndex = 0;

const gradeQuestion = (ans) => {
    if (ans == selectedQuestions[questionIndex].answer) {
        score += 20;
    }

    questionIndex += 1;

}
const renderSuccess = () => {
    $('.question-number').text('');
    $('.question-question').text('');
    $('.options1').text('');
    $('.options2').text('');
    $('.options3').text('');
    $('.options4').text('');
    if (score >= 50) {
        $('<p>Verified Foodie</p>').appendTo('.question-question')
        $('<img src="https://media.giphy.com/media/xT8qBepJQzUjXpeWU8/giphy.gif">').appendTo('.question-options')
    } else {
        $('<p>try again Wannabe Foodie</p>').appendTo('.question-question')
        $('<img src="https://media.giphy.com/media/ZHdaDyeI3ISGI/giphy.gif">').appendTo('.question-options')

    }


}

const renderQuestion = (qIndex) => {
    let question = selectedQuestions[qIndex];

    $('.question-number').text('Question ' + (qIndex + 1));
    $('.question-question').text(question.question);
    $('.options1').text('');
    $('.options2').text('');
    $('.options3').text('');
    $('.options4').text('');
    question.option.forEach((element, i) => {
        let opt = '.options' + (i + 1);
        let radioBut = $('<input type ="radio" name="answer" value=" + element + " />')
        let radioLab = $('<label for=' + element + '>' + element + '</label>')
        radioBut.appendTo(opt);
        radioLab.appendTo(opt);

    });


    $("input:radio[name='answer']").click(function() {
        gradeQuestion(this.value)
        if (questionIndex == (selectedQuestions.length)) {
            renderSuccess();

        } else {
            renderQuestion(questionIndex);
        }

    });
}


$(document).ready(function() {
    renderQuestion(questionIndex);
});