angular.module('mnTechSite')
       .controller('ServicesController', ServicesController);

function ServicesController(quoteServ) {
  console.log('ServicesController Loaded');

  const ctrl = this;

  ctrl.sendFormData = function(data) {
    quoteServ.sendFormData(data).then(function(response){
      console.log("Response from submit: ", repsonse);
    });
  }
}
