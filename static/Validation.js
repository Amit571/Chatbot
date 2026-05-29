var name = document.getElementById('name');
var mobile = document.getElementById('mobail');
var email = document.getElementById('email');


$('.submitbtn').click(function () {
     if (name.value == "" && mobile.value == "" && email.value == "" && mobile.value == "") {
          $('.sign').hide();
          $('#block').show();
          $('#textInput').removeAttr('disabled');

          setTimeout(function () {
               $('.about-time').show()
          }, 1000);

          setTimeout(function () {
               $('.video-text-time').show()
          }, 1500);

          setTimeout(function () {
               $('.video').show()
          }, 2000);

          setTimeout(function () {
               $('.tab-time').show()
               $('.box').scrollTop(1000000);
          }, 2500);
     }
})