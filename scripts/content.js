console.log('content ready!!');

$(document).ready(function() {
  var url = location.href;
  var suffix = '&developer=true';
  var isSsoPage = location.href.includes('sso-login.html');
  var isDev = location.href.includes(suffix);
  var domContext = $('.ab-wp.default-show:visible');
  var inputs = $('input', domContext);
  var btn = $('.new-btn', domContext);

  if (!isDev) {
    location.href = url + suffix;
  }

  if (isSsoPage) {
    inputs[0].focus();
    inputs[0].value = 'test5@abcft.com';
    inputs[1].focus();
    inputs[1].value = '1234qwer';
    btn.text('🐶已经填好啦!');
    // btn.click();
  }
});
