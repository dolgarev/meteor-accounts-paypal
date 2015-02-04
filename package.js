Package.describe({
  name: 'liberation:accounts-paypal',	
  summary: 'Login service for PayPal accounts',
  version: '1.0.2',
  git: 'https://github.com/dolgarev/meteor-accounts-paypal'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('liberation:paypal-login@1.0.2', ['client', 'server']);

  api.addFiles('paypal_login_button.css', 'client');

  api.addFiles("paypal.js");
});
