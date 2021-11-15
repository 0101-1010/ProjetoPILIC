var answers = {};
answers.question1=0;
answers.question2=0;
answers.question3=0;
answers.question4=0;

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}


function totalScore(event){
    var total = answers.question1+answers.question2+answers.question3+answers.question4;
    console.log(answers.question1+answers.question2+answers.question3+answers.question4);
    return total;
}

function getInfoBasedOnScore(){
    if(totalScore() === 22){
        var score_info = "HTML / CSS / Java Script";
    } else if(totalScore() === 35){
        var score_info = "Java Script / Python";
    }else if(totalScore() === 56){
        var score_info = "HTML / CSS / Java Script / Python / mysql "
    } else if(totalScore() === 10){
        var score_info = "É recomendado entender um pouco do ambiente de servidores, manjar o fundamental de HTML, CSS e JavaScript. React. Swift "
    } else if(totalScore() === 15){
        var score_info = "É recomendado entender um pouco do ambiente de servidores, manjar o fundamental de HTML, CSS e JavaScript. React. Kotlin.\n Média salarial: R$ 4.670,00 \n Link para estudos:\n HTML: https://www.udemy.com/course/aprendahtml/\n CSS: https://www.w3schools.com/css/default.asp\n JavaScript: https://www.udemy.com/course/curso-web/\n React: https://www.udemy.com/course/curso-react-native/\n Kotlin: https://www.udemy.com/course/curso-desenvolvedor-kotlin/"
    } else if(totalScore() === 3){
        var score_info = "java / python / C /SQL "
    } else if(totalScore() === 5){
        var score_info = "profissional tem que ser muito bom em redes, sistemas operacionais e arquitetura de computadores. Se possível, ter conhecimento de desenvolvimento de software, principalmente Phyton, C, SQL "
    } else if(totalScore() === 24){
        var score_info = "HTML / CSS / Java Script/ AngularJS "
    } else if(totalScore() === 36){
        var score_info = "Ruby, Python, C#, C++ "
    } else if(totalScore() === 57){
        var score_info = "HTML, Python, Ruby, CSS, JavaScript, NodeJS e React "
    } else if(totalScore() === 11){
        var score_info = "É recomendado entender um pouco do ambiente de servidores, manjar o fundamental de HTML, CSS e JavaScript. React. Objective-c "
    } else if(totalScore() === 16){
        var score_info = "É recomendado entender um pouco do ambiente de servidores, manjar o fundamental de HTML, CSS e JavaScript. React. Kotlin "
    } else if(totalScore() === 4){
        var score_info = "SQL, Python e R"
    } else if(totalScore() === 6){
        var score_info = "profissional tem que ser muito bom em redes, sistemas operacionais e arquitetura de computadores. Se possível, ter conhecimento de desenvolvimento de software, principalmente Phyton, SQL , C++ "
    }
    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit5');


function nextQuestion(question_number){
    var current_question_number
    if(answers.question2 === 2 || answers.question2 === 3 || answers.question2 === 5){
        current_question_number = 2;
    }else if(answers.question3 === 21 || answers.question3 === 34 || answers.question3 === 55){
        current_question_number = 3;
    }else{
        current_question_number = question_number-1;
    }
    var Question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+Question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('40%');
})

submit2.addEventListener('click', function(){
    if(answers.question2 === 2){
        growProgressBar('70%');
        nextQuestion(4);
    } else if(answers.question2 === 3 || answers.question2 === 5){
        growProgressBar('100%');
        nextQuestion(5);
    } else {
        growProgressBar('70%');
        nextQuestion(3);
    }
})

submit3.addEventListener('click', function(){
    growProgressBar('100%');
    nextQuestion(5);
})

submit4.addEventListener('click', function(){
    growProgressBar('100%');
    document.getElementById('question-4').style.display = "none";
    nextQuestion(5);
})
submit5.addEventListener('click', function(){
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}