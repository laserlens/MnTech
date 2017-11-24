angular.module('mnTechSite')
       .controller('SurveyController', SurveyController);

function SurveyController(emailServ) {
  console.log('SurveyController Loaded');

  var ctrl = this;

//funtion sends form data to email service
  ctrl.sendSurveyData = function(data) {
    data.subject = "Client Survey"
    console.log(ServicesController.name);
    emailServ.sendSurveyData(data).then(function(response){
      console.log("Response from submit: ", repsonse);
    });
  }

}//end of conroller function
