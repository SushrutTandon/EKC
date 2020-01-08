
/*jshint esversion: 6 */


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var clock = document.getElementById('clock');





/* clock */ 



function Clock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
  var hexColorStr = hours + minutes + seconds;

  clock.textContent = clockStr;
  
}

Clock();
setInterval(Clock, 1000);



$(document).ready(function () {
	var trigger = $('.hamburger'),
		overlay = $('.overlay'),
	   isClosed = false;
  
	  trigger.click(function () {
		hamburger_cross();      
	  });
  
	  function hamburger_cross() {
  
		if (isClosed == true) {          
		  overlay.hide();
		  trigger.removeClass('is-open');
		  trigger.addClass('is-closed');
		  isClosed = false;
		} else {   
		  overlay.show();
		  trigger.removeClass('is-closed');
		  trigger.addClass('is-open');
		  isClosed = true;
		}
	}
	
	$('[data-toggle="offcanvas"]').click(function () {
		  $('#wrapper').toggleClass('toggled');
	});  
  });



  function myFunction() {
	var txt;
	var person = prompt("Please enter your email id For Account Recovery:", "info@gmail.com");
	if (person == null || person == "") {
	  txt = "User cancelled the prompt.";
	} else {
	  txt = "Hello " + person + "! How are you today?";
	}
	document.getElementById("demo").innerHTML = txt;
  }

 

$(document).on("pagecreate", function () {
    $("#foo").on("click", function () {
        // close button
        var closeBtn = $('<a href="#" data-rel="back" class="ui-btn-right ui-btn ui-btn-b ui-corner-all ui-btn-icon-notext ui-icon-delete ui-shadow">Close</a>');

        // text you get from Ajax
        var content = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing. Morbi convallis sem et dui sollicitudin tincidunt.</p>";

        // Popup body - set width is optional - append button and Ajax msg
        var popup = $("<div/>", {
            "data-role": "popup"
        }).css({
            width: $(window).width() / 2.5 + "px",
            padding: 5 + "px"
        }).append(closeBtn).append(content);

        // Append it to active page
        $.mobile.pageContainer.append(popup);

        // Create it and add listener to delete it once it's closed
        // open it
        $("[data-role=popup]").popup({
            dismissible: false,
            history: false,
            theme: "b",
            /* or a */
            positionTo: "window",
            overlayTheme: "b",
            /* "b" is recommended for overlay */
            transition: "pop",
            beforeposition: function () {
                $.mobile.pageContainer.pagecontainer("getActivePage")
                    .addClass("blur-filter");
            },
            afterclose: function () {
                $(this).remove();
                $(".blur-filter").removeClass("blur-filter");
            },
            afteropen: function () {
                /* do something */
            }
        }).popup("open");
    });
});



/* resetPassword*/
document.getElementById("button").addEventListener("click", ChangePW);

function ChangePW(){
  if(document.getElementById("one").value === document.getElementById("two").value && document.getElementById("one").value !== ''){
    alert('Pw has been reset.');
  }
}