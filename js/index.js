/* The arrow appears after it passes the navigation bar */
$(window).scroll(function(){
    let windowScroll=$(window).scrollTop();
    if(windowScroll > 200){
      $('#fixed-arrow').show(1000)
    }
    else{
        $('#fixed-arrow').hide(1000)
    }
  })
  $('#fixed-arrow').click(function(){
    $('html').animate({
      scrollTop:0
    },1000)
  })
  $(window).ready(()=>{
    $('#loading').slideUp(3000,function(){
      $('body').css('overflow-y','scroll')
    })
  })