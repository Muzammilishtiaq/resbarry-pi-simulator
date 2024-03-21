//   API URL
const apiUrl = 'http://103.217.176.16:9094';
const onledlight = `${apiUrl}/static/image/led-light-on.png`;
const offledlight = `${apiUrl}/static/image/led-light-off.png`;
// <====================== get relay function start ==============================>
function getrelay() {
  fetch(`${apiUrl}/get_relays`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data && data.data) {
        relayupdatebutton(data.data);
        console.log('get Relay Array:', data.data);
      } else {
        console.error('Invalid API response format');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

}
// <====================== get relay function end ==============================>

//
// <====================== update relay button function start ==============================>

function relayupdatebutton(dataindex) {

  const buttons = document.querySelectorAll('#relaybutton');
  const leds = document.querySelectorAll('#relay-led-light');
  var relayboolean = true;
  // Iterate through each button
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Toggle the checkbox state
      const checkbox = button.querySelector('.checkbox');
      dataindex[index] = checkbox.checked;
      checkbox.checked = dataindex[index];
      console.log(checkbox.checked = dataindex[index]);
      setrelay(index);
      // Toggle the LED based on the checkbox state
      const led = leds[index];
      if (checkbox.checked = dataindex[index]) {
        led.src = onledlight;
        console.log(`Relay ${index} is ON`);
      }
      else {
        led.src = offledlight;
        console.log(`Relay ${index} is OFF`);
      }
    });
    // window load condition
    if (dataindex[index] === true) {
      const checkbox = button.querySelector('.checkbox');
      // dataindex[index] = checkbox.checked;
      checkbox.checked = dataindex[index];
      const led = leds[index];
      // if (checkbox.checked) {
      led.src = onledlight;
      // console.log(`Relay ${index} is ON`);
      // }
    }
    else if (dataindex[index] === false) {
      const checkbox = button.querySelector('.checkbox');
      // dataindex[index] = checkbox.checked;
      checkbox.checked = dataindex[index];
      const led = leds[index];
      // if (checkbox.checked) {
      led.src = offledlight;
      // console.log(`Relay ${index} is ON`);
      // }
    }
  });
}
// <====================== update relay button function end ==============================>

// <====================== set relay api function start ==============================>
function setrelay(index) {
  fetch(`${apiUrl}/set_relay?pinNo=${index}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('pin no is success set relay', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

// <====================== document ready get relay function start ==============================>

document.addEventListener('DOMContentLoaded', function () {
  getrelay();
});

// <====================== get relay function end ==============================>
// <================= api or button or set or get digital output function start ===================>
function getdigitaloutput() {
  fetch(`${apiUrl}/getDigitalOutPuts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('get digital output is success', data.data);
      digitaloutputbtn(data.data);
    })
    .catch(error => {
      console.error('get digital output is Error:', error);
    });

}
document.addEventListener('DOMContentLoaded', function () {
  getdigitaloutput();
});
// button function digitaloutput
function digitaloutputbtn(digitaloutputindex) {
  const buttons = document.querySelectorAll('#digitaloutputbutton');
  const leds = document.querySelectorAll('#digital-output-led-light');
  var relayboolean = true;
  // Iterate through each button
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Toggle the checkbox state
      const checkbox = button.querySelector('.checkbox');
      digitaloutputindex[index] = checkbox.checked;
      checkbox.checked = digitaloutputindex[index];
      console.log('digital output true', checkbox.checked);
      // function setdigitaloutput
      setdigitaloutput(index, checkbox.checked);
      // Toggle the LED based on the checkbox state
      const led = leds[index];
      if (checkbox.checked) {
        led.src = onledlight;
        console.log(`digital output ${index} is ON`);
      }
      else {
        led.src = offledlight;
        console.log(`digital output ${index} is OFF`);
      }
    });
    if (digitaloutputindex[index] === true) {
      const checkbox = button.querySelector('.checkbox');
      // dataindex[index] = checkbox.checked;
      checkbox.checked = digitaloutputindex[index];
      const led = leds[index];
      // if (checkbox.checked) {
      led.src = onledlight;
      // console.log(`Relay ${index} is ON`);
      // }
    }
    else if (digitaloutputindex[index] === false) {
      const checkbox = button.querySelector('.checkbox');
      // dataindex[index] = checkbox.checked;
      checkbox.checked = digitaloutputindex[index];
      const led = leds[index];
      // if (checkbox.checked) {
      led.src = offledlight;
      // console.log(`Relay ${index} is ON`);
      // }
    }
  });
}
// setdigitaloutput api
function setdigitaloutput(index) {
  fetch(`${apiUrl}/setDigitalOutPut?pinNo=${index}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('set digital output is success', data);
    })
    .catch(error => {
      console.error('set digital output is Error:', error);
    });

}
// <================= api get digital output function end =====================>
// <================= api get digital input function start =====================>
function getdigitalinput() {
  fetch(`${apiUrl}/getDigitalInPuts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('get digital input is success', data.data);
      digitalinputbtn(data.data);
    })
    .catch(error => {
      console.error('get digital input is Error:', error);
    });

}

document.addEventListener('DOMContentLoaded', function () {

  getdigitalinput();
});
function digitalinputbtn(digitalinputindex) {
  const buttons = document.querySelectorAll('#digitalinputbutton');
  const leds = document.querySelectorAll('#digital-input-led-light');
  var relayboolean = true;
  // Iterate through each button
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Toggle the checkbox state
      const checkbox = button.querySelector('.checkbox');
      digitalinputindex[index] = checkbox.checked;
      checkbox.checked = digitalinputindex[index];
      console.log('digital input', digitalinputindex[index]);
      // function setdigitaloutput
      // Toggle the LED based on the checkbox state
      const led = leds[index];
      if (checkbox.checked) {
        led.src = onledlight;
        console.log(`digital input ${index} is ON`);
      }
      else {
        led.src = offledlight;
        console.log(`digital input ${index} is OFF`);
      }
    });
    if (digitalinputindex[index] === true) {
      const checkbox = button.querySelector('.checkbox');
      // dataindex[index] = checkbox.checked;
      checkbox.checked = digitalinputindex[index];
      const led = leds[index];
      // if (checkbox.checked) {
      led.src = onledlight;
      // console.log(`Relay ${index} is ON`);
      // }
    }
    else if (digitalinputindex[index] === false) {
      const checkbox = button.querySelector('.checkbox');
      // dataindex[index] = checkbox.checked;
      checkbox.checked = digitalinputindex[index];
      const led = leds[index];
      // if (checkbox.checked) {
      led.src = offledlight;
      // console.log(`Relay ${index} is ON`);
      // }
    }
  });
}
// <================ = api get digital input function end =====================>

// <================ = api get_gpios function start =====================>
function getgpios() {
  fetch(`${apiUrl}/get_gpios`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      gpiosbtn(data.data);
      console.log('get get_gpios is success', data.data);
    })
    .catch(error => {
      console.error('get get_gpios is Error:', error);
    });

}

document.addEventListener('DOMContentLoaded', function () {
  getgpios();
});

function gpiosbtn(gpiosindex) {
  const buttons = document.querySelectorAll('#gpiosbutton');
  const leds = document.querySelectorAll('#gpios-led-light');
  var relayboolean = true;
  // Iterate through each button
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Toggle the checkbox state
      const checkbox = button.querySelector('.checkbox');
      gpiosindex[index] = checkbox.checked;
      checkbox.checked = gpiosindex[index];
      console.log('gpios true', checkbox.checked);
      // function setdigitaloutput
      // Toggle the LED based on the checkbox state
      const led = leds[index];
      if (checkbox.checked) {
        led.src = onledlight;
        console.log(`gpios ${index} is ON`);
      }
      else {
        led.src = offledlight;
        console.log(`gpios ${index} is OFF`);
      }
    });
    if (gpiosindex[index] === true) {
      const checkbox = button.querySelector('.checkbox');
      // dataindex[index] = checkbox.checked;
      checkbox.checked = gpiosindex[index];
      const led = leds[index];
      // if (checkbox.checked) {
      led.src = onledlight;
      // console.log(`Relay ${index} is ON`);
      // }
    }
    else if (gpiosindex[index] === false) {
      const checkbox = button.querySelector('.checkbox');
      // dataindex[index] = checkbox.checked;
      checkbox.checked = gpiosindex[index];
      const led = leds[index];
      // if (checkbox.checked) {
      led.src = offledlight;
      // console.log(`Relay ${index} is ON`);
      // }
    }
  });
}
// <================ = api get_gpios function end =====================>

// <================ = api get_analogOuts function start =====================>
function getanalogOuts() {
  fetch(`${apiUrl}/get_analogOuts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('get analogOuts is success', data.data);
      document.getElementById('analogout0voltage').value = data.data[0]; // Show value with one decimal place
      document.getElementById('analogout1voltage').value = data.data[1]; // Show value with one decimal place
      toggleButtons0(parseFloat(data.data[0]));
      toggleButtons1(parseFloat(data.data[1]));
    })
    .catch(error => {
      console.error('get get_analogOuts is Error:', error);
    });

}

document.addEventListener('DOMContentLoaded', function () {
  getanalogOuts();
});
// ==== 0 voltage stepper start 
document.querySelector('#analogoutputnumbercontrol0 #analogoutputincrement0').addEventListener('click', function () {
  var inputField = this.parentNode.querySelector('input');
  var value = parseInt(inputField.value);
  inputField.value = value + 1;
  toggleButtons0(value + 1);
});


document.querySelector('#analogoutputnumbercontrol0 #analogoutputdecrement0').addEventListener('click', function () {
  var inputField = this.parentNode.querySelector('input');
  var value = parseInt(inputField.value);
  inputField.value = value - 1;
  toggleButtons0(value - 1);
});


function toggleButtons0(value) {
  // Disable decrement button if value is 0
  if (value <= 0) {
    document.querySelector('.number-control0 .decrement0').classList.add('disabled');
  } else {
    document.querySelector('.number-control0 .decrement0').classList.remove('disabled');
  }

  // Disable increment button if value is 800
  if (value >= 800) {
    document.querySelector('.number-control0 .increment0').classList.add('disabled');
  } else {
    document.querySelector('.number-control0 .increment0').classList.remove('disabled');
  }
}

// ==== 0 voltage stepper end 

// ==== 1 voltage stepper start 
document.querySelector('#analogoutputnumbercontrol1 #analogoutputincrement1').addEventListener('click', function () {
  var inputField = this.parentNode.querySelector('input');
  var value = parseInt(inputField.value);
  inputField.value = value + 1;
  toggleButtons1(value + 1);
});


document.getElementById('analogoutputdecrement1').addEventListener('click', function () {
  var inputField = this.parentNode.querySelector('input');
  var value = parseInt(inputField.value);
  inputField.value = value - 1;
  toggleButtons1(value - 1);
});


function toggleButtons1(value) {
  // Disable decrement button if value is 0
  var decrementButton = document.querySelector('.number-control1 .decrement1');
  if (value <= 0) {
    decrementButton.classList.add('disabled');
  } else {
    decrementButton.classList.remove('disabled');
  }

  // Disable increment button if value is 5
  var incrementButton = document.querySelector('.number-control1 .increment1');
  if (value >= 800) {
    incrementButton.classList.add('disabled');
  } else {
    incrementButton.classList.remove('disabled');
  }
}

// ==== 1 voltage stepper end 


function setanalogOuts(pinon, value) {
  fetch(`${apiUrl}/set_analogOut?pinNo=${pinon}&volts=${value}`, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Assuming response is JSON
    })
    .then(data => {
      console.log('Stepper value updated successfully:', data, value);
    })
    .catch(error => {
      console.error('Error updating stepper value:', error);
    });
}
document.getElementById('analogoutputvoltage-btn0').addEventListener('click', function () {
  var pinNo = 0;
  var value = parseFloat(document.getElementById('analogout0voltage').value);
  setanalogOuts(pinNo, value);
  console.log(pinNo, value);
});

document.getElementById('analogoutputvoltage-btn1').addEventListener('click', function () {
  var pinNo = 1;
  var value = parseFloat(document.getElementById('analogout1voltage').value);
  setanalogOuts(pinNo, value);
  console.log(pinNo, value);
});

// <================ = api get_analog input function end =====================>

// <================ = api get_analog input function start =====================>
function getanaloginput() {
  fetch(`${apiUrl}/get_analogIns`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('get analog input is success', data.data);
      document.getElementById('analoginputpin0').innerHTML = data.data[0]; // Show value with one decimal place
      document.getElementById('analoginputpin1').innerHTML = data.data[1];
    })
    .catch(error => {
      console.error('get get_analog input is Error:', error);
    });

}
document.addEventListener('DOMContentLoaded', function () {
  getanaloginput();
});

// <================ = api get_analog input function end =====================>
// <================ =  api function start =====================>
// PWM-START API 
function pwmStartApi(pin,cycle) {
  fetch(`${apiUrl}/start_pwm?pinNo=${pin}&cycle=${cycle}`, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Assuming response is JSON
    })
    .then(data => {
      console.log('Set start-pwm value updated successfully:', data);
    })
    .catch(error => {
      console.error(' start-pwm Error updating stepper value:', error);
    });
};
function pwmStopApi(pin) {
  fetch(`${apiUrl}/stop_pwm?pinNo=${pin}`, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Assuming response is JSON
    })
    .then(data => {
      console.log('Set start-pwm value updated successfully:', data);
    })
    .catch(error => {
      console.error(' start-pwm Error updating stepper value:', error);
    });
};
// global variable
let selectedPin;
let cyclevalue;
function selectPwmAOption(selectElement) {
  selectedPin = selectElement.value;
  // console.log('pwm ', selectedPin)
}
function selectcycleOption(cycleselect) {
  cyclevalue = cycleselect.value
  // console.log('cycle', cyclevalue)
}
// window load cycle 
document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.querySelector(".cycle-form-select");

  for (let i = 0; i <= 255; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = "Cycle " + i;
    selectElement.appendChild(option);
    // console.log(i)
  }

});
// start button click
document.getElementById('startclickfun').addEventListener('click', function (){
  const pin= selectedPin;
  const cycle= cyclevalue
  console.log(pin,cycle)
  pwmStartApi(pin,cycle)
})
// click stop button
document.getElementById('stopclickfun').addEventListener('click', function (){
  const pin= selectedPin;
  console.log('stop button',pin)
  pwmStopApi(pin)
})
// <================ = api bitfunction end =====================>