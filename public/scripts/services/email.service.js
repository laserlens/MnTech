angular.module('mnTechSite')
       .service('emailServ', EmailService);

function EmailService($http) {

  const service = this;

  service.sendFormData = function(data) {
    if (data.subject === "Requesting A Quote") {
    console.log("In the service: ", data);
    service.emailData = {
      name: data.name,
      subject: data.subject,
      sender: data.email,
      email: data.email,
      to: 'mntechcoop@gmail.com',
      phone: data.phone,
      organization: data.organization,
      description: data.description,
    };
    return $http.post('/postQuoteEmail', service.emailData)
    .then(function(response){
      return repsonse;
    });
  } else {
    console.log("In the service: ", data);
    service.emailData = {
      name: data.name,
      address: data.address,
      subject: data.subject,
      sender: data.email,
      email: data.email,
      to: 'mntechcoop@gmail.com',
      phone: data.phone,
      sample: data.sample,
      info: data.info,
    };
    return $http.post('/postMembershipEmail', service.emailData)
    .then(function(response){
      return repsonse;
    });
  }
}


} // End of Service
