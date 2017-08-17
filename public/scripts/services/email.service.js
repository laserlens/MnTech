angular.module('mnTechSite')
       .service('emailServ', EmailService);

function EmailService($http) {

  const service = this;

  service.sendFormData = function(data) {
    console.log("In the service: ", data);
    service.emailData = {
      name: data.name,
      from: data.email,
      to: 'mntechcoop@gmail.com',
      phone: data.phone,
      organization: data.organization,
      description: data.description
    };
    return $http.post('/postEmail', service.emailData)
    .then(function(response){
      return repsonse;
    });
  }


} // End of Service
