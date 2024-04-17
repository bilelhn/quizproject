var form = document.getElementById('form');
form.style.display = 'block';
form.style.margin = '20px';
form.style.padding = '20px';

var btn = document.querySelector('button');
btn.style.backgroundColor = 'green';
btn.style.color = 'white';
btn.style.width = '150px';

btn.addEventListener('click', quiz);
function quiz(event) {
    var qst1 = document.quizForm.question1.value;
    var qst2 = document.quizForm.question2.value;
    var qst3 = document.quizForm.question3.value;
    let score = 0;

    if (qst1 == "" || qst2 == "" || qst3 == "") {
        return alert("You should answer all questions");
    }
    if (qst1 == "options1") {
        score += 10;
    } else if (qst1 == "option2") {
        score += 20;
    } else if (qst1 == "option3") {
        score += 30;
    }

    if (qst2 == "option1") {
        score += 100;
    } else if (qst2 == "option2") {
        score += 200;
    } else if (qst2 == "option3") {
        score += 300;
    }

    if (qst3 == "option1") {
        score += 1000;
    } else if (qst3 == "option2") {
        score += 2000;
    } else if (qst3 == "option3") {
        score += 3000;
    }

    alert("Your score is: " + score);
}
