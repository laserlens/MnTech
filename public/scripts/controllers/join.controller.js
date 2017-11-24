angular.module('mnTechSite')
       .controller('JoinController', JoinController);

function JoinController(emailServ) {
  console.log('JoinController Loaded');

  var ctrl = this;

  ctrl.sendMemberData = function(data) {
    data.subject = "Membership Request"
    console.log(ServicesController.name);
    emailServ.sendMemberData(data).then(function(response){
      console.log("Response from submit: ", repsonse);
    });
  }
}
