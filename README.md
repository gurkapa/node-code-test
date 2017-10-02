# node-code-test

## Instructions

This assignment consists of three steps to complete, trying to mimic what could be considered some common tasks for a backend developer. Instructions for how the project should be setup and started is found after the steps so make sure you read this entire document before gettig started.

### Assignment

#### Implement slugifier

Run these commands: 
```
npm install
npm test
```
From the output of that last command you should see that one test is failing, this is because the file `lib/slugifier.js` in still unimplmented. First task is to do this and such a way that all of the tests pass when running `npm test`.

#### Deploy to Heroku

For this part you will need to register a free account on https://heroku.com if you do not already have one. From there you should create a new app running in region Europe. When the app is created you should add the add-on `mLab MongoDB` to the app, choose the free plan `Sandbox` it will be enough. Now deploy the app using the instructions for Heroku Git found in the Heroku UI.

#### Limit revisions

Now that the project is up and running you can add some data by using a tool for REST requests, for example Postman (https://www.getpostman.com/) start by creating a new job with a POST request to `/job/`, and then edit this by sending PUT requests to `/job/:jobId`. Notice that the list of `revisions` in the returned object for each PUT will grow, to avoid this from making this document too large change the logic for this list to only save the last five revisions, older data can just be thrown away for now. 

Hint: the entry point for PUT requests is found in the file `routes/index.js`

#### Handing in

Handing in is done in two steps, first add Roger as a collaborator to your app on heroku by the email address that was sent to you together with the link to this github project. And secondly zip the entire project with your solutions and return it by email.

## Running the project
Before you can actually get the project up and running you will either have to complete the first parts of the step `Deploy to Heroku` namely to the point where you have added the `mLab MongoDB` add-on, or you can install mongodb on your local machine from instructions on https://www.mongodb.com/. When this is done create a copy of the file `default.json` in the folder `config` and name it `local.json`. Now set the value for `mongodbUri` to the value for your mLab database which you can find using the Heroku interface on the tab Settings for your app. Click Reveal Config Vars there and copy the value for MONGODB_URI to your local.json file. Or if using a local mongodb set the value to the address you use for that.

Now you can get up and running locally with these commands:
```
npm install
npm start
```
For an even smoother development experience install `nodemon` globally with `npm install nodemon -g` and just run the command `nodemon` from project root. Files changes will now be checked and service restarted.
