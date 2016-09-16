$(function(){
  $('#dummy-nav').hide();
  var flag = false;
  $(window).scroll(function(){
    //if ($(this).scrollTop() >= 100 ){
    //  $('#title').hide();
    //}
    if(window.innerWidth >= 480){
      if ($(this).scrollTop() >= 160 ){
        if(!flag){
          console.log($(this).scrollTop());
          $('#global-navigation-wrapper').addClass("fixed");
          $('#global-navigation-wrapper').removeClass("relative");
          $('#dummy-nav').show();
          flag = true;
        }
      }else{
        if(flag){
          $('#global-navigation-wrapper').addClass("relative");
          $('#global-navigation-wrapper').removeClass("fixed");
          $('#dummy-nav').hide();
          flag = false;
        }
      }
    }else{
       $('#global-navigation-wrapper').removeClass("fixed");
    }
  })
  
  window_load();

  //ウィンドウサイズ変更時に更新
  window.onresize = window_load;
  
  window.onload = function(){
    var body = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] );

    if (body < window.parent.screen.height){
      $('#footer').addClass("fixed-bottom");
    }
  }

  //サイズの表示
  function window_load() {
    if(window.innerWidth < 480){
      var size = (window.innerWidth - 90) / 5;
      $(".list").width(size);

      // $(".apps-card").height(css('margin-left',($(".apps-card").width() - 160) / 2));
     
      // $(".apps-card").each(function(i, elem) {
      //   console.log($("#"+$(elem).attr("id")+" p").height() );
      //     if($("#"+$(elem).attr("id")+" p").height() > 209){
            
      //       console.log("ktkr");// $(elem).height($("#"+$(elem).attr("id")+" .apps-text-wrapper").height()+261);
      //     }else{
      //       var size2 = (window.innerWidth * 0.8) * 1.618;
      //       $(".apps-card").height(size2);
      //     }
      // });
    } else {
      $(".list").width(220);
    }

    $(".apps-card img").css('margin-left',($(".apps-card").width() - 160) / 2);
  }
});
