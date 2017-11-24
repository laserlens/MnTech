angular.module('mnTechSite')
       .service('emailServ', EmailService);

function EmailService($http) {

  const service = this;
  const route = '/sendEmail';
  const quoteRoute = '/quoteMailer';
  const memberRoute = '/memberMailer';
  const surveyRoute = '/surveyMailer';

  service.sendQuoteData = function(data) {
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
    return $http.post(route + quoteRoute, service.emailData)
    .then(function(response){
      return repsonse;
    });
 }

  service.sendMemberData = function functionName(data) {
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
    return $http.post(route + memberRoute, service.emailData)
    .then(function(response){
      return repsonse;
    });
    }

    service.sendSurveyData = function(data) {
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
      return $http.post(route + surveyRoute, service.emailData)
      .then(function(response){
        return repsonse;
      });
   }

}// End of Service
