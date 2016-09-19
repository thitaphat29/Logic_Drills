function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
 
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function doTrafficLights() {
  turnOffLights();
  var activeLight = getActiveLight();
  // your code will replace this call
  // to `alert
  if(activeLight === 'red'){
    turnRed();
  }
  if(activeLight === 'green'){
    turnGreen();
  }
  if(activeLight === 'yellow'){
    turnYellow();
  }

  alert(activeLight);

}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(function() {
  handleClicks();
})