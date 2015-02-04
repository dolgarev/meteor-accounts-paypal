Accounts.oauth.registerService('paypal');

if (Meteor.isClient) {
  Meteor.loginWithPaypal = function(options, callback) {
    // support a callback without options
    if (!callback && _.isFunction(options)) {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    PaypalLogin.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.paypal'],
    forOtherUsers: ['services.paypal.id', 'services.paypal.name']
  });
}
