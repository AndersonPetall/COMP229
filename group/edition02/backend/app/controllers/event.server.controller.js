let Event = require("../models/event.server.model");
let mongoose = require("mongoose");

//display all events
exports.displayAllEvent = function (req, res) {
  if (req.session.lastVisit) {
    console.log(`Last visited: ${req.session.lastVisit}`);
  }
  req.session.lastVisit = new Date();
  try {
    Event.find({}, (err, events) => {
      if (err) {
        res.json(err);
        return next(err);
      } else {
        res.json(events);
      }
    });
  } catch (error) {
    res.json(error);
    next(error);
  }
};
//display one event
exports.displayOneEvent = async function (req, res, next) {
  if (req.session.lastVisit) {
    console.log(`Last visited: ${req.session.lastVisit}`);
  }
  req.session.lastVisit = new Date();
  var objectId = mongoose.Types.ObjectId(req.params._id);
  Event.findById(objectId, (err, event) => {
    if (err) {
      return next(err);
    } else {
      res.json(event);
    }
  });
};

//update one event
exports.updateEvent = async function (req, res, next) {
  if (req.session.lastVisit) {
    console.log(`Last visited: ${req.session.lastVisit}`);
  }
  req.session.lastVisit = new Date();
  var objectId = mongoose.Types.ObjectId(req.params._id);
  let newevent = new Event({
    _id: objectId,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    type: req.body.type,
    startDay: req.body.startDay,
    endDay: req.body.endDay,
    contastants: req.body.contastants,
  });
  Event.findByIdAndUpdate(objectId, newevent, (err, event) => {
    if (err) {
      return next(err);
    } else {
      res.json(event);
    }
  });
};

//create one event
exports.createOneEvent = async function (req, res, next) {
  if (req.session.lastVisit) {
    console.log(`Last visited: ${req.session.lastVisit}`);
  }
  req.session.lastVisit = new Date();
  let newevent = new Event({
    _id: mongoose.Types.ObjectId(req.body._id),
    imageUrl: req.body.imageUrl,
    description: req.body.imageUrl,
    startDay: req.body.startDay,
    endDay: req.body.endDay,
    contastants: req.body.imageUrl,
  });
  try {
    Event.create(newevent);
  } catch (err) {
    res.json(err);
    console.log(`backend create event error ${err}`);
  }
};

//delete event
exports.deleteEvent = (req, res) => {
  try {
    console.log(`event _id: ${req.params._id}`);
    var objectId = mongoose.Types.ObjectId(req.params._id);
    Event.findOneAndDelete(objectId, (err, event) => {
      if (err) {
        res.send({ err: `backend Error Deleting Event ${req.params._id}` });
        console.log(` backend Error Deleting Event ${req.params._id}`);
        return next(err);
      } else {
        console.log(`successfully Deleting Event ${req.params._id}`);
        return res.send({ msg: `successful Deleting Event ${req.params._id}` });
      }
    });
  } catch (err) {
    res.json(err);
    console.log(`backend deleted Event Error ${err}`);
  }
};
