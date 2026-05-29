function getBotResponse() {
  var rawText = $("#textInput").val();
  var userHtml = '<p class="userText waht"><span>' + rawText + '</span></p>';
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById('userInput').scrollIntoView({ block: 'start', behavior: 'smooth' });
  $.get("/get", { msg: rawText }).done(function (data) {
    var botHtml = '<p class="botText"><span>' + data + '</span></p>';
    if ($("#chatbox").append(botHtml)) {
      $('.box').scrollTop(1000000);
    }
    document.getElementById('userInput').scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}

$("#textInput").keypress(function (e) {
  if ((e.which == 13) && document.getElementById("textInput").value != "") {
    getBotResponse();
  }
});
$("#submitInput").click(function () {
  if (document.getElementById("textInput").value != "") {
    getBotResponse();
  }
})

$(document).ready(function () {
  $('.scroll').click(function () {
    $('.box').scrollTop(1000000);
  });
});

$(document).on('keypress', function (e) {
  if (e.which == 13) {
    $('.box').scrollTop(1000000);
  }
});

$(document).ready(function () {
  $("#btn").click(function () {
    $('.wrapper').slideToggle();
  })

  $("#ugselect").click(function () {
    $('#UG-Box').show();
    $('.iop-1df').show();
  })
  $("#Ug-back").click(function () {
    $('#UG-Box').hide();
    $('.iop-1df').hide();
  })

  $("#ug-civ").click(function () {
    $('#bt-civ-select').show();
  })

  $("#ug-com").click(function () {
    $('#bt-cm-select').show();
  })

  $("#ug-comi").click(function () {
    $('#bt-et-select').show();
  })

  $("#ug-mba").click(function () {
    $('#bt-me-select').show();
  })

  $("#pgselect").click(function () {
    $('#Polybox').show();
  })
  $("#pg-back").click(function () {
    $('#pg-box').hide();
  })

  $("#ug-pgd-btn").click(function () {
    $('#bt-gs-select').show();
  })
  //  ******************************************************************

  $("#pg-civ-btn").click(function () {
    $('#pt-civ-cont').show();
  })

  $("#pg-com-btn").click(function () {
    $('#pt-cm-select').show();
  })

  $("#pg-comi-btn").click(function () {
    $('#pt-et-select').show();
  })

  $("#pg-mba-btn").click(function () {
    $('#pt-me-select').show();
  })

  $("#pt-pgd-btn").click(function () {
    $('#pt-gs-select').show();
  })


  //  $("#mbaselect").click(function()
  //  {
  //  $('#mba-box').show();
  //  $('.doi134').show();
  //  })
  //  $("#mba-back").click(function()
  //  {
  //  $('#mba-box').hide();
  //  $('.doi134').hide();
  //  })

  //  $("#pgdselect").click(function()
  //  {
  //  $('#pgd-box').show();
  //  $('.hio54').show();
  //  })
  //  $("#pgd-back").click(function()
  //  {
  //  $('#pgd-box').hide();
  //  $('.hio54').hide();
  //  })

  //  $("#ug-pgd-btn").click(function()
  //  {
  //  $('#pgd-ug-name-text').show();
  //  })

  //  $("#pg-civ-btn").click(function()
  //  {
  //  $('#pg-civ-con').show();
  //  $('#pg-civ-span').show();
  //  })

  //  $("#pg-com-btn").click(function()
  //  {
  //  $('#pg-com-con').show();
  //  $('#pg-com-span').show();
  //  })

  //  $("#pg-comi-btn").click(function()
  //  {
  //  $('#pg-comi-con').show();
  //  $('#pg-comi-span').show();
  //  })

  //  $("#pg-mba-btn").click(function()
  //  {
  //  $('#pg-mba-con').show();
  //  $('#pg-mba-span').show();
  //  })

  //  $("#mba-bs-btn").click(function()
  //  {
  //  $('#mba-bs-con').show();
  //  $('#mba-bs-span').show();
  //  })

  //  $("#mba-ba-btn").click(function()
  //  {
  //  $('#mba-ba-con').show();
  //  $('#mba-ba-span').show();
  //  })

  //  $("#amd-civ-btn").click(function()
  //  {
  //  $('#amd-civ-con').show();
  //  $('#amd-civ-span').show();
  //  })

  //  $("#amd-atuo-btn").click(function()
  //  {
  //  $('#amd-atuo-con').show();
  //  $('#amd-atuo-span').show();
  //  })

  //  $("#amd-com-btn").click(function()
  //  {
  //  $('#amd-com-con').show();
  //  $('#amd-com-span').show();
  //  })


  //  $("#amd-comh-btn").click(function()
  //  {
  //  $('#amd-comh-con').show();
  //  $('#amd-comh-span').show();
  //  })

  //  $("#amd-ee-btn").click(function()
  //  {
  //  $('#amd-ee-con').show();
  //  $('#amd-ee-span').show();
  //  })

  //  $("#amd-me-btn").click(function()
  //  {
  //  $('#amd-me-con').show();
  //  $('#amd-me-span').show();
  //  })

  $("#inq-rar-btn").click(function () {
    $('#inq-rar-con').show();
    $('#inq-rar-span').show();
  })

  $("#inq-mac-btn").click(function () {
    $('#inq-mac-con').show();
    $('#inq-mac-span').show();
  })

  $("#inq-cbc-btn").click(function () {
    $('#inq-cbc-con').show();
    $('#inq-cbc-span').show();
  })

  $("#inq-pls-btn").click(function () {
    $('#inq-pls-con').show();
    $('#inq-pls-span').show();
  })

  $("#inq-phd-btn").click(function () {
    $('#inq-phd-con').show();
    $('#inq-phd-span').show();
  })
  // **********************************************************
  $("#about-btn").click(function () {
    $('#about-show').show();
  })

  $("#addmibtn").click(function () {
    $('#addmi-show').show();
  })
  // **********************************************************
  $('#addmibtn').click(function () {
    $('#addbox').show();
    $('.box').scrollTop(100);
    $('.inqbox').hide();
    $('#inqbox-user').hide()
    $('#addmiback').click(function () {
      $('#addbox,#addmi-show').hide();
    })
    $('#inqbtn').click(function () {
      $('.box').scrollTop(300);
    })
  })
  $('#inqbtn').click(function () {
    $('#inqbox-user').show()
    $('#addbox').hide();
    $('.inqbox').show();
    $('#addmi-show').hide();
  })
  $('#inqback').click(function () {
    $('#inqbox-user').hide()
    $('.inqbox').hide();
  })
})


// var box = document.getElementById('info')
// var form = document.getElementById('form')
// form.addEventListener('submit',function(event)
// {
//   event.preventDefault()
//   var name = document.getElementById('name').value
// })


