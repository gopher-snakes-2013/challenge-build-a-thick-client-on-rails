$(document).ready(function(){
  console.log('I loaded!');
  $('.container').append('<h1>Welcome to Stannie\'s quiz hub!</h1>');
  QuizController.getQuizzes();
})

function Quiz(id, name){
  this.id = id;
  this.name = name;
}

function Question(){

}

function Choice(){

}


var QuizController = {
  getQuizzes: function(){
    $.ajax({
      url: '/quizzes.json',
      type: 'get'
    })
    .done(function(response){
      QuizController.createQuizzes(response.quizzes);
      QuizController.appendQuizzes(response.quizzes);
    })
  },

  createQuizzes: function(allQuizzes){
    for(var i = 0; i < allQuizzes.length; i++){
      var quiz_id = allQuizzes[i].quiz_id;
      var quiz_name = allQuizzes[i].name;
      window["quiz" + (i + 1)] = new Quiz(quiz_id, quiz_name);
      QuizController.appendQuizzes(window["quiz" + (i + 1)])
    }
  },

  appendQuizzes: function(allQuizzes){
    for(var i = 0; i < allQuizzes.length; i++){
      var quizName = window["quiz" + (i + 1)].name;
      $('.container').append('<h2><a href="#">' + quizName + '</a></h2>');
    }
  }
}

var QuestionController = {
  getQuestion: function(){
    console.log(quiz1);
    console.log(quiz2);
  }
}

