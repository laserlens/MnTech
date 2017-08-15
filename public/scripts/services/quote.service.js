angular.module('mnTechSite')
       .service('quoteServ', QuoteService);

function QuoteService($http) {

  const service = this;

  service.sendFormData = function(data) {
    service.emailData = {
      name: data.name,
      from: data.email,
      to: 'mntechcoop@gmail.com',
      phone: data.phone,
      organization: data.organization,
      description: data.description
    };
    console.log(service.emailData);
    return $http.post('/postEmail', service.emailData)
    .then(function(response){
      return repsonse;
    });
    console.log("From QuoteService: ", service.emailData);
  }
} // End of Service
