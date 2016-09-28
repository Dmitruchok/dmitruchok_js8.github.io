$(function () {
  var $firstName = $('#Firstname'),
  $lastname = $('#Lastname'),
  $promtContain = $('.prompt_1, .prompt_2, .prompt_3'),
  $adress = $('#Adress'),
  $prompt1 = $('.prompt_1'),
  $prompt2 = $('.prompt_2'),
  $prompt3 = $('.prompt_3'),
  $buttonPrompt = $('button');

  $firstName.mousemove( function () {
      $prompt1.css({
        display: 'block',
        opacity: '100'
    })
  }).mouseout( function () {
    $prompt1.animate({
      display: 'block',
      opacity: '0'
    }, 800);
  });

  $lastname.mousemove( function () {
    $prompt2.css({
      display: 'block',
      opacity: '100'
    });
  }).mouseout( function () {
    $prompt2.animate({
      display: 'block',
      opacity: '0'
    }, 800);
  });

  $adress.mousemove( function () {
    $prompt3.css({
      display: 'block',
      opacity: '100'
    });
  }).mouseout( function () {
    $prompt3.animate({
      display: 'block',
      opacity: '0'
    }, 800);
  });

  $buttonPrompt.mouseup( function () {
    $(this).css('background', '#eee');
    $promtContain.css({
      display: 'block',
      opacity: '100'
    });
  }).mousedown( function () {
    $(this).css('background', '#007fff');
  });

  $buttonPrompt.mousemove( function () {
    $(this).css( 'background', '#eee' );
  }).mouseout( function () {
    $buttonPrompt.css( 'background', '#f6f6f6' );
  });
});
