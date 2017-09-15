var express = require('express');
var router = express.Router();

var resources = [
  {
    url: '/timesheet',
    verb: 'GET',
    description: 'List all timesheets'
  },
  {
    url: '/timesheet',
    body: JSON.stringify({
      "month": "August",
      "year": "2017"
    }, null, 4),
    verb: 'POST',
    description: 'Create a new timesheet. Returns the new timesheet with the id.'
  },
  {
    url: '/timesheet',
    body: JSON.stringify({
      "timesheetId": "38a71dff1c5342ca3db339b9e4a7bcf25f735f34",
      "month": "August",
      "year": "2017"
    }, null, 4),
    verb: 'PUT',
    description: 'Update an existing timesheet. Requires the timesheet with the id.'
  },
  {
    url: '/timesheet/:timesheetId',
    verb: 'DELETE',
    description: 'Delete a timesheet by id.'
  }
];

/* GET resources */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resources, null, 4));
});

module.exports = router;
