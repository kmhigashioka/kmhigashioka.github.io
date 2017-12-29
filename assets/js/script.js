$(document).ready(function () {
  $(function() {
    $.scrollify({
      section : ".full-height",
      sectionName : "section-name"
    });
    
    ['articles', 'projects', 'contact'].forEach(function (t) {
      $("a[href*='" + t + "']").click(function() {
        $.scrollify.move("#" + t);
      });
    });

    $(this).bind('scroll', onChangeBackgroundColor);
    onChangeBackgroundColor();

    function onChangeBackgroundColor() {
      if ($('.welcome h1').visible(true)) {
        $('body').removeClass();
        $('body').addClass('gray-bgcolor');
      }
      if ($('.articles .article-container').visible(true)) {
        $('body').removeClass();
        $('body').addClass('pink-bgcolor');
      }
      if ($('.projects .project-container').visible(true)) {
        $('body').removeClass();
        $('body').addClass('gray-bgcolor');
      }
      if ($('.contact h1').visible(true)) {
        $('body').removeClass();
        $('body').addClass('dark-gray-bgcolor');
      }
    }
  });
});
