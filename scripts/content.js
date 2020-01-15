function waitForElementToDisplay(selector, time, callback) {
  if (document.querySelector(selector) != null) {
    callback();
    return;
  } else {
    setTimeout(function() {
      waitForElementToDisplay(selector, time, callback);
    }, time);
  }
}

$(document).ready(function() {
  var url = location.href;
  var suffix = '&developer=true';
  var isDev = location.href.includes(suffix);
  var isSsoPage = url.includes('sso-login.html');
  var host = location.host;

  chrome.storage.sync.get('chrome-developkit.domains', (e) => {
    var domains = e['chrome-developkit.domains'];
    var config = domains.find((item) => item.domain === host);

    if (isSsoPage && !isDev && config.debug) {
      location.href = url + suffix;
    }

    var domContext = $('.ab-wp.default-show:visible');

    if (isSsoPage) {
      waitForElementToDisplay('#multimode-login', 1000, () => {
        var inputs = $('input', domContext);
        var btn = $('.new-btn', domContext);

        // inputs[0].focus();
        inputs[0].value = config.username;
        inputs[0].dispatchEvent(new Event('input'));
        // inputs[1].focus();
        inputs[1].value = config.password;
        inputs[1].dispatchEvent(new Event('input'));
        btn.text('🐶已经填好啦!');
        btn.click();
      });
    }
  });
});
