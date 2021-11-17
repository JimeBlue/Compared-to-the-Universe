$(function () {
  $('#navbar [href]').each(function () {
    if (this.href == window.location.href) {
      $(this).addClass('active:opacity-50');
    }
  });
});
