$(function() {
  $('#tab-perso').click(function() {

    $('#perso').removeClass("hidden");
    $('#collab').addClass("hidden");
    $('#instit').addClass("hidden");

    $('#tab-perso').addClass('tab-active');
    $('#tab-instit').removeClass('tab-active');
    $('#tab-collab').removeClass('tab-active');

  })

  $('#tab-instit').click(function() {

    $('#perso').addClass("hidden");
    $('#collab').addClass("hidden");
    $('#instit').removeClass("hidden");

    $('#tab-perso').removeClass('tab-active');
    $('#tab-instit').addClass('tab-active');
    $('#tab-collab').removeClass('tab-active');

  })

  $('#tab-collab').click(function() {

    $('#perso').addClass("hidden");
    $('#collab').removeClass("hidden");
    $('#instit').addClass("hidden");

    $('#tab-perso').removeClass('tab-active');
    $('#tab-instit').removeClass('tab-active');
    $('#tab-collab').addClass('tab-active');

  })
})
