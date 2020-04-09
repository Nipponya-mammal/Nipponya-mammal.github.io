$(function() {
  
  // ホバーすると表示　TOP
  // $('.service-hover').hover(
  //   function() {
  //     $(this).find('.text-contents').addClass('text-active');
  //   },
  //   function() {
  //     $(this).find('.text-contents').removeClass('text-active');
  //   }
  // );

  // ホバーするとフェイド（スライド）イン／アウト　TOP
  // $('.service-hover').hover(
  //     function() {
  //       $('.text-contents').fadeIn(2000);
  //     },
  //     function() {
  //       $('.text-contents').fadeOut(2000);
  //     }
  //   );

  // ホバーすると表示　About
  // $('.me-hover').hover(
  //   function() {
  //     $(this).find('.spec').addClass('spec-active');
  //   },
  //   function() {
  //     $(this).find('.spec').removeClass('spec-active');
  //   }
  // );

  // / ホバーするとフェイド（スライド）イン／アウト　About
  // $('.me-hover').hover(
  //     function() {
  //       $('.spec').fadeIn(2000);
  //     },
  //     function() {
  //       $('.spec').fadeOut(2000);
  //     }
  //   );

  //バークリックで表示→再度クリックで消える
  // Toggleはクリックごとに変更するためのもの

  // document.getElementById("menu-icon").addEventListener("click", function(){
  //   this.classList.toggle("active");
  //   document.getElementById("nav").classList.toggle("active");
  // });


  // スクロールで表示／非表示　TOP
  // $(this).offset().top;　→指定要素の位置
  // $(window).scrollTop(); →スクロール量
  // $(window).height();　→ウィンドウの高さ

  $(window).scroll(function (){
    $(".text-contents").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("text-active");
      } else {
        $(this).removeClass("text-active");
      }
    });
  });

  // スクロールで表示／非表示　About
  $(window).scroll(function (){
    $(".spec").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("spec-active");
      } else {
        $(this).removeClass("spec-active");
      }
    });
  });



  //ハンバーガーアイコンクリックでナビバー表示 ＋　ハンバーガー非表示
  $("#menu-icon").click(
    function(){
    $("#nav").fadeIn(1000);
    $(this).fadeOut(1000);
    
   }); 

   //バツアイコンクリックでナビバー非表示　＋　ハンバーガーバー再び表示
  $(".fa-times").click(function(){
    $("#menu-icon").fadeIn(1000);
    $("#nav").fadeOut(1000);
  });


  // $('#menu-icon').click(
  //   function() {
  //     $(this).find('#nav').addClass('active');
  //   }
  // );

});