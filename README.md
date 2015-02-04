# meteor-accounts-paypal

A login service for Paypal. See the [project page](https://www.meteor.com/accounts) on Meteor Accounts for more details.

Install
-----------
```
meteor add liberation:accounts-paypal
```

Setup
-----------
```js
ServiceConfiguration.configurations.upsert(
  { service: "paypal" },
  { $set: { clientId: "...", secret: "...", loginStyle: "popup", environment: "<live|sandbox>"} }
);
```