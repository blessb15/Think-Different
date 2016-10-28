$(document).ready(function(){

  $('#page-1-link').click(function() {
    $('.nav-bar').addClass('nav-right');
    $('#page-1').addClass('page-expand-left');
    $('.base').addClass('base-expand');
  });

  $('#page-2-link').click(function() {
    $('.nav-bar').addClass('nav-right');
    $('#page-2').addClass('page-expand-left');
    $('.base').addClass('base-expand');
  });

  $('#page-3-link').click(function() {
    $('#page-3').addClass('page-expand-right');
    $('.nav-bar').addClass('nav-left');
    $('.base').removeClass('base-expand');
  });

  $('#page-4-link').click(function() {
    $('#page-4').addClass('page-expand-right');
    $('.nav-bar').addClass('nav-left');
    $('.base').removeClass('base-expand');
  });

  $('.nav-bar-img').click(function() {
    $('.nav-bar').removeClass('nav-right');
    $('.nav-bar').removeClass('nav-left');
    $('#page-1').removeClass('page-expand-left');
    $('#page-2').removeClass('page-expand-left');
    $('#page-3').removeClass('page-expand-right');
    $('#page-4').removeClass('page-expand-right');
    $('.base').removeClass('base-expand');
    $('.nav-bar-img').removeClass('nav-bar-img-center');
    $('.nav-page-link').show();
  });

  $('.nav-page-link').click(function(){
    if ($('.nav-bar').hasClass('nav-right') || $('.nav-bar').hasClass('nav-left')){
      $('.nav-page-link').hide();
      $('.nav-bar-img').addClass('nav-bar-img-center');
    }
  });

});
