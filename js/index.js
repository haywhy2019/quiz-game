const selectedQuestions = 

//old commented it out
qAndA.sort(() => {
//     return (Math.random() - Math.random())
// }).slice(0, 5);

// //new testing
return (Math.random() - Math.random())}).slice(0, 5);
//console.log(selectedQuestions)

let score = 0;
let questionIndex = 0;

const gradeQuestion = (ans) => {
   // console.log(score, ans, selectedQuestions[questionIndex].answer)
    if (ans == selectedQuestions[questionIndex].answer) {
        score += 20;
    }

    questionIndex += 1;

}
const renderSuccess = () => {
   // console.log(score);
    $('.question-number').text('');
    $('.question-question').text('');
    $('.options1').text('');
    $('.options2').text('');
    $('.options3').text('');
    $('.options4').text('');
    if (score >= 50) {
        console.log (score)
        $('.score').text('your score is:'+ " " +score);
        $('<p>Verified Foodie</p>').appendTo('.question-question')
        $('<img src="https://media.giphy.com/media/xT8qBepJQzUjXpeWU8/giphy.gif">').appendTo('.question-options')
      
    } else {
        $('.score').text('your score is:'+ " " +score);
        $('<p>try again Wannabe Foodie, you scored:</p>', score).appendTo('.question-question')
        $('<img src="https://media.giphy.com/media/ZHdaDyeI3ISGI/giphy.gif">').appendTo('.question-options')
    }


}

const renderQuestion = (qIndex) => {
    
    let question = selectedQuestions[questionIndex];

    $('.question-number').text('Question' + (questionIndex + 1));
    $('.question-question').text(question.question);
    $('.options1').text('');
    $('.options2').text('');
    $('.options3').text('');
    $('.options4').text('');
    question.option.forEach((element, i) => {
        let opt = '.options' + (i + 1);
        let radioBut = $('<input type ="radio" name="answer" value=' + element + ' />');
        let radioLab = $('<label for=' + element + '>' + element + '</label>');
        radioBut.appendTo(opt);
        radioLab.appendTo(opt);

    });


    $("input:radio[name='answer']").click(function() {
        //grade question
        gradeQuestion(this.value)
        //render question
        if (questionIndex == (selectedQuestions.length)) {
            //render success
            renderSuccess();

        } else {
            renderQuestion(questionIndex);
        }

    });
}


$(document).ready(function() {
    renderQuestion(questionIndex);
});