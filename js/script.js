
/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function () {
  var $oneList = $('.one_link'),
  $twoList = $('.two_link'),
  $threeList = $('.three_link'),
  $tab_1 = $('.tab_1'),
  $tab_2 = $('.tab_2'),
  $tab_3 = $('.tab_3'),
  $container = $('.container'),
  $wrapper = $('.wrapper');

  $oneList.on('click', function () {
    $(this).css( 'background', '#007fff' ),
    $tab_1.css( 'display', 'block'),
    $wrapper.css( 'overflow', 'none' );
    $container.css( 'margin', '10px 0px 10px 10px' ),
    $twoList.css( 'background', '#fff' ),
    $threeList.css( 'background', '#fff' ),
    $tab_2.css( 'display', 'none' ),
    $tab_3.css( 'display', 'none');
  });
});
