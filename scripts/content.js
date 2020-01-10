console.log('content ready!!');

$(document).ready(function() {
  var url = location.href;
  var suffix = '&developer=true';
  var isDev = location.href.includes(suffix);

  if (!isDev) {
    location.href = url + suffix;
  }

  var domContext = $('.ab-wp.default-show:visible');
  var inputs = $('input', domContext);
  var btn = $('.new-btn', domContext);

  if (isSsoPage) {
    inputs[0].focus();
    inputs[0].value = 'test5@abcft.com';
    inputs[1].focus();
    inputs[1].value = '1234qwer';
    btn.text('🐶已经填好啦!');
    // btn.click();
  }
});
