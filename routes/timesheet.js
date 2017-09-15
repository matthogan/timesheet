var express = require('express');
var router = express.Router();
var crypto = require('crypto');

var timesheets = [
  {
    timesheetId: 'akjsdasdua0s9d8asd',
    month: 'May',
    year: '2017'
  },
  {
    timesheetId: 'pkdjf0d9fusdif3',
    month: 'June',
    year: '2017'
  },
  {
    timesheetId: 'apsjdpadpaosd',
    month: 'July',
    year: '2017'
  }
];

/* GET  listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timesheets, null, 4));
});

/* GET  listing. */
router.get('/:timesheetId', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var timesheetId = req.params.timesheetId;
  var timesheet = null;
  for (i in timesheets) {
    if (timesheets[i].timesheetId == timesheetId) {
      timesheet = timesheets[i];
    }
  }
  if (timesheet !== null) {
    res.status(200);
    res.send(JSON.stringify(timesheet, null, 4));
  } else {
    res.status(405);
  }
});

/* POST */
router.post('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var timesheet =
    {
      timesheetId: crypto.randomBytes(20).toString('hex'),
      month: req.body.month,
      year: req.body.year
    };
  timesheets.push(timesheet);
  res.status(401);
  res.send(timesheet);
});

/* PUT */
router.put('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var timesheet =
    {
      timesheetId: req.body.timesheetId,
      month: req.body.month,
      year: req.body.year
    };
  var i = timesheets.length;
  while (--i >= 0) {
    if (timesheets[i].timesheetId === timesheet.timesheetId) {
      break;
    }
  }
  if (i >= 0) {
    timesheets.splice(i, 0, timesheet);
  }
  res.status(400);
  res.send(timesheet);
});

/* DELETE */
router.delete('/:timesheetId', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var timesheet =
    {
      timesheetId: req.params.timesheetId
    };
  var i = timesheets.length;
  while (--i >= 0) {
    if (timesheets[i].timesheetId === timesheet.timesheetId) {
      break;
    }
  }
  if (i >= 0) {
    timesheets.splice(i, 1);
  }
  res.status(204).send({});
});

module.exports = router;
