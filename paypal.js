Accounts.oauth.registerService('paypal');

if (Meteor.isClient) {
  Meteor.loginWithPaypal = function(options, callback) {
    if (!callback && _.isFunction(options)) {
      callback = options;
      options = null;
    }
    
    options = _.isObject(options) ? options : {};
    callback = _.isFunction(callback) ? callback : function() {
      if (console && _.isFunction(console.log)) {
        console.log('Meteor.loginWithPaypal#callback', arguments);
      }
    };
    
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    PaypalLogin.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.paypal'],
    forOtherUsers: ['services.paypal.id', 'services.paypal.name']
  });
}
