//   API URL
const apiUrl = 'http://103.217.176.16:9094';
// <====================== get relay function start ==============================>
function getrelay() {
  $.ajax({
    url: `${apiUrl}/get_relays`,
    method: 'GET',
    dataType: 'json', // Specify the expected data type of the response
    success: function (data) {
      // Handle the successful response
      if (data && data.data) {
        updatebutton(data.data);
        console.log('get Relay Array:', data.data);
      } else {
        console.error('Invalid API response format')
      }
    },
    error: function (xhr, status, error) {
      // Handle errors
      console.error('Error:', status, error);
    }
  });
}
// <====================== get relay function end ==============================>
// <====================== document ready get relay function start ==============================>

$(document).ready(function () {
  getrelay();
});

// <====================== get relay function end ==============================>
//
// <====================== update relay button function start ==============================>

function updatebutton(dataindex) {

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
      console.log(checkbox.checked);
      setrelay(index, checkbox.checked);
      // Toggle the LED based on the checkbox state
      const led = leds[index];
      if (checkbox.checked) {
        led.src = "./led-light-on.png";
        console.log(`Relay ${index} is ON`);
      } else {
        led.src = "./led-light-off.png";
        console.log(`Relay ${index} is OFF`);
      }
    });
  });
}
// <====================== update relay button function end ==============================>

// <====================== set relay api function start ==============================>
function setrelay(index, state) {
  $.ajax({
    url: `${apiUrl}/set_relays?pinNo=${index}`,
    method: 'GET',
    dataType: 'json', // Specify the expected data type of the response
    success: function (data) {
      console.log('pin no is success set relay', state)
    },
    error: function (xhr, status, error) {
      // Handle errors
      console.error('Error:', status, error, state);
    }
  });
}

// <================= api or button or set or get digital output function start ===================>
function getdigitaloutput() {
  $.ajax({
    url: `${apiUrl}/getDigitalOutPuts`,
    method: 'GET',
    dataType: 'json', // Specify the expected data type of the response
    success: function (data) {
      console.log('get digital output is success', data.data)
      digitaloutputbtn(data.data);
    },
    error: function (xhr, status, error) {
      // Handle errors
      console.error('get digital output is Error:', status, error);
    }
  });
}
$(document).ready(function () {
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
        led.src = "./led-light-on.png";
        console.log(`digital output ${index} is ON`);
      } else {
        led.src = "./led-light-off.png";
        console.log(`digital output ${index} is OFF`);
      }
    });
  });
}

// set api
function setdigitaloutput(index, state) {
  $.ajax({
    url: `${apiUrl}/setDigitalOutPut?pinNo=${index}`,
    method: 'GET',
    dataType: 'json', // Specify the expected data type of the response
    success: function (data) {
      console.log('set digital output is success', state, data)
    },
    error: function (xhr, status, error) {
      // Handle errors
      console.error('set digital output is Error:', status, error, state);
    }
  });
}
// <================= api get digital output function end =====================>
// <================= api get digital input function start =====================>
function getdigitalinput() {
  $.ajax({
    url: `${apiUrl}/getDigitalInPuts`,
    method: 'GET',
    dataType: 'json', // Specify the expected data type of the response
    success: function (data) {
      console.log('get digital input is success', data.data);
      digitalinputbtn(data.data);
    },
    error: function (xhr, status, error) {
      // Handle errors
      console.error('get digital input is Error:', status, error);
    }
  });
}

$(document).ready(function () {
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
      console.log('digital input true', checkbox.checked);
      // function setdigitaloutput
      // Toggle the LED based on the checkbox state
      const led = leds[index];
      if (checkbox.checked) {
        led.src = "./led-light-on.png";
        console.log(`digital output ${index} is ON`);
      } else {
        led.src = "./led-light-off.png";
        console.log(`digital output ${index} is OFF`);
      }
    });
  });
}
// <================ = api get digital input function end =====================>

// <================ = api get_gpios function start =====================>
function getgpios() {
  $.ajax({
    url: `${apiUrl}/get_gpios`,
    method: 'GET',
    dataType: 'json', // Specify the expected data type of the response
    success: function (data) {
      gpiosbtn(data.data);
      console.log('get get_gpios is success', data.data);
    },
    error: function (xhr, status, error) {
      // Handle errors
      console.error('get get_gpios is Error:', status, error);
    }
  });
}

$(document).ready(function () {
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
        led.src = "./led-light-on.png";
        console.log(`gpios ${index} is ON`);
      } else {
        led.src = "./led-light-off.png";
        console.log(`gpios ${index} is OFF`);
      }
    });
  });
}
// <================ = api get_gpios function end =====================>

// <================ = api get_analogOuts function start =====================>
function getanalogOuts() {
  $.ajax({
    url: `${apiUrl}/get_analogOuts`,
    method: 'GET',
    dataType: 'json', // Specify the expected data type of the response
    success: function (data) {
      console.log('get analogOuts is success', data.data);
      $('#analogout0voltage').val(data.data[0]); // Show value with one decimal place
      $('#analogout1voltage').val(data.data[1]); // Show value with one decimal place
      toggleButtons0(parseFloat(data.data[0]));
      toggleButtons1(parseFloat(data.data[1]));
    },
    error: function (xhr, status, error) {
      // Handle errors
      console.error('get get_analogOuts is Error:', status, error);

    }
  });
}

$(document).ready(function () {
  getanalogOuts();
});
// ==== 0 voltage stepper start 
$('#analogoutputnumbercontrol0 #analogoutputincrement0').click(function () {
  var inputField = $(this).siblings('input');
  var value = parseInt(inputField.val());
  inputField.val(value + 1);
  toggleButtons0(value + 0.1);
});

$('#analogoutputnumbercontrol0 #analogoutputdecrement0').click(function () {
  var inputField = $(this).siblings('input');
      var value = parseInt(inputField.val());
        inputField.val(value - 1);
  toggleButtons0(value - 1);
});

function toggleButtons0(value) {
  // Disable decrement button if value is 0
  if (value <= 0) {
    $('.number-control0 .decrement0').addClass('disabled');
  } else {
    $('.number-control0 .decrement0').removeClass('disabled');
  }

  // Disable increment button if value is 5
  if (value >= 5) {
    $('.number-control0 .increment0').addClass('disabled');
  } else {
    $('.number-control0 .increment0').removeClass('disabled');
  }
}
// ==== 0 voltage stepper end 
// ==== 1 voltage stepper start 
$('#outputnumbercontrol1 #outputincrement1').click(function () {
  var inputField = $(this).siblings('input');
  var value = parseInt(inputField.val());
  inputField.val(value + 1);
  toggleButtons1(value + 1)
});

$('#outputnumbercontrol1 #outputdecrement1').click(function () {
  var inputField = $(this).siblings('input');
  var value = parseInt(inputField.val());
    inputField.val(value - 1);
  toggleButtons1(value - 1);
});

function toggleButtons1(value) {
  // Disable decrement button if value is 0
  if (value <= 0) {
    $('.number-control1 .decrement1').addClass('disabled');
  } else {
    $('.number-control1 .decrement1').removeClass('disabled');
  }

  // Disable increment button if value is 5
  if (value >= 5) {
    $('.number-control1 .increment1').addClass('disabled');
  } else {
    $('.number-control1 .increment1').removeClass('disabled');
  }
}
// ==== 1 voltage stepper end 


function setanalogOuts(pinon, value) {
  $.ajax({
    url: `${apiUrl}/set_analogOut?pinNo=${pinon}&volts=${value}`,
    type: 'GET',
    success: function (data) {
      console.log('Stepper value updated successfully:', data, value);
    },
    error: function (xhr, status, error) {
      console.error('Error updating stepper value:', error, status);
    }
  });
}
$('#voltage-btn0').click(function () {
  var pinNo = 0;
  var value = parseFloat($('#analogout0voltage').val());
  setanalogOuts(pinNo, value);
  console.log(pinNo, value)
});
$('#voltage-btn1').click(function () {
  var pinNo = 1;
  var value = parseFloat($('#analogout1voltage').val());
  setanalogOuts(pinNo, value);
  console.log(pinNo, value)
});
// <================ = api get_analog input function end =====================>

// <================ = api get_analog input function start =====================>
function getanaloginput(){
  $.ajax({
    url: `${apiUrl}/get_analogIns`,
    method: 'GET',
    dataType: 'json', // Specify the expected data type of the response
    success: function (data) {
      console.log('get analog input is success', data.data);
    },
    error: function (xhr, status, error) {
      // Handle errors
      console.error('get get_analog input is Error:', status, error);

    }
  });
}
$(document).ready(function () {
  getanaloginput();
});

// get analog input voltage 0
$('#analoginputnumbercontrol0 #analoginputincrement0').click(function () {
  $('#analoginput0voltage').val(parseInt($('#analoginput0voltage').val()) + 1);
  ;

});

$('#analoginputnumbercontrol0 #analoginputdecrement0').click(function () {
  $('#analoginput0voltage').val(parseInt($('#analoginput0voltage').val()) - 1);

});

// get analog input voltage 1
$('#analoginputnumbercontrol1 #analoginputincrement1').click(function () {
  $('#analoginput1voltage').val(parseInt($('#analoginput1voltage').val()) + 1);
  ;

});

$('#analoginputnumbercontrol1 #analoginputdecrement1').click(function () {
  $('#analoginput1voltage').val(parseInt($('#analoginput1voltage').val()) - 1);

});

// <================ = api get_analog input function end =====================>
