angular.module('mnTechSite')
       .controller('ServicesController', ServicesController);

function ServicesController(emailServ) {
  console.log('ServicesController Loaded');

  const ctrl = this;

  ctrl.sendFormData = function(data) {
    data.subject = "Requesting A Quote"
    console.log(ServicesController.name);
    emailServ.sendFormData(data).then(function(response){
      console.log("Response from submit: ", repsonse);
    });
  }
}
