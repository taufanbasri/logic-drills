function doTrafficLights() {
    turnOffLights();
    var activeLight = getActiveLight();
    if (activeLight === 'red') {
      turnRed();
    }
    if (activeLight === 'yellow') {
      turnYellow();
    }
    if (activeLight === 'green') {
      turnGreen();
    }
  }
  
  
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  
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
  
  function handleClicks() {
    $('.js-control-lights').click(function() {
      doTrafficLights();
    });
  }
  
  $(handleClicks);
  