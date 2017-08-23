angular.module('mnTechSite')
       .controller('JoinController', JoinController);

function JoinController(emailServ) {
  console.log('JoinController Loaded');

  var ctrl = this;

  ctrl.sendFormData = function(data) {
    data.subject = "Membership Request"
    console.log(ServicesController.name);
    emailServ.sendFormData(data).then(function(response){
      console.log("Response from submit: ", repsonse);
    });
  }
}
