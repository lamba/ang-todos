ang-todos
=========

JavaScript app for managing to-dos

This is an all-JavaScript full-stack SPA POC using HTML5, CSS3, JavaScript, SSL, AJAX, JSON, Node.js & Mongo, deployed to the Heroku cloud PaaS (managed by Salesforce.com and based on Amazon's AWS).

Click the link at the top to view a demo.

see readme for todos

the key here is to understand how ang-todos is leveraging todos
===============================================================

clearly the mongodb database is shared between the two apps

quite likely the logic is also shared (need to confirm this)

and only the ui is different, i.e. in angular

on line 32 of index.html you see that at one point in time it used to load the entire client todos.js

in the bootstrap function on line 483, you can see that the app connects to the underlying lamba-todos app either locally or remotely

after establishing the url prefix, it simply calls the corresponding lamba-todos rest api for each angular action

(the lamba-todos api is designed to be completely rest compliant)

the lamba-todos app can be configured on line 51 of the server.js to connect locally (which used to work but as of 082024 doesn't) or might as well simply connect to the cloud atlas instance 


