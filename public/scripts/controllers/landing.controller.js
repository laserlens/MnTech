angular.module('mnTechSite')
       .controller('LandingController', LandingController);

function LandingController() {
  console.log('LandingController Loaded');

  const ctrl = this;

  const pageContainer = document.querySelector('#landing-page');
  let windowSize = {width: window.innerWidth, height: window.innerHeight};

  ctrl.setWidth = function(e) {
    console.log(windowSize);
    console.log(pageContainer);
    console.log(e);
  }

  ctrl.setWidth();

  pageContainter.addEventListener('resize', ctrl.getWidth);

}
