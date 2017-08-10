angular.module('mnTechSite')
       .controller('ServicesController', ServicesController);

function ServicesController() {
  console.log('ServicesController Loaded');

  var ctrl = this;

  ctrl.sendFormData = function(data) {
    console.log(data);
  }
}
