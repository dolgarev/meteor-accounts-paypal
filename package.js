Package.describe({
  name: 'liberation:accounts-paypal',	
  summary: 'Login service for PayPal accounts',
  version: '1.0.1',
  git: 'https://github.com/dolgarev/meteor-accounts-paypal'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.1.3', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.3', ['client', 'server']);
  api.use('liberation:paypal-login@1.0.0', ['client', 'server']);

  api.addFiles('paypal_login_button.css', 'client');

  api.addFiles("paypal.js");
});
