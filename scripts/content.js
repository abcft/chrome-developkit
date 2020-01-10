console.log('content ready!!');

$(document).ready(function() {
  var url = location.href;
  var suffix = '&developer=true';
  var isSsoPage = location.href.includes('sso-login.html');
  var isDev = location.href.includes(suffix);
  // var domContext = $('.ab-wp.default-show:visible');
  // var inputs = $('input', domContext);
  // var btn = $('.new-btn', domContext);

  if (isSsoPage && !isDev) {
    location.href = url + suffix;
  }
});
