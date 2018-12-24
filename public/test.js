window.fbAsyncInit = function() {
  FB.init({
    appId: '217132752218567',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v3.0'
  });

  getContent();
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/messenger.Extensions.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'Messenger');

function getContent() {
  MessengerExtensions.getContext(
    '217132752218567',
    function success(thread_context) {
      console.log(thread_context);
    },
    function error(err) {
      console.log(err);
    }
  );
}
