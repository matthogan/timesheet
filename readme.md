#Timesheet CRUD API using Express/NodeJS

## Express
https://github.com/expressjs/express
https://expressjs.com/en/starter/generator.html
(Generated with $ npm install express-generator -g)

## Installation
(Requires Nodejs)
$ npm install express
$ npm install crypto
$ npm install body-parser
$ npm install

## Running
$ set DEBUG=mock-server:*
$ npm start

## Resources
The URLs exposed within the API.

###List the API resources
curl localhost:3000/

###List the timeheets
curl localhost:3000/timesheet/

###List a particular timesheet
curl localhost:3000/timesheet/apsjdpadpaosd

###Create a timesheet
curl -d '{"month":"August", "year":"2017"}' -H "Content-Type: application/json" -X POST http://localhost:3000/timesheet

###Alter a timesheet
curl -d '{"timesheetId": "apsjdpadpaosd","month":"Mattober", "year":"2017"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/timesheet

###Delete a timesheet
curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/timesheet/akjsdasdua0s9d8asd
