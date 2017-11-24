angular.module('mnTechSite')
       .controller('ServicesController', ServicesController);

function ServicesController(emailServ) {
  console.log('ServicesController Loaded');

  const ctrl = this;

//sends form data to quoteRoute
  ctrl.sendQuoteData = function(data) {
    //data.subject = "Requesting A Quote"
    console.log(ServicesController.name);
    emailServ.sendQuoteData(data).then(function(response){
      console.log("Response from submit: ", repsonse);
    });
  }
}
