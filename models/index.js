const db = require('./_db');
// const Sequelize = require('sequelize');

const Attendance = require('./attendance');
const Comment = require('./comment');
const Event = require('./event');
const EventRating = require('./eventRating');
const EventStaffing = require('./eventStaffing');
const EventType = require('./eventType');
const Lead = require('./lead');
const User = require('./user');

//This will create a new model called attendance with the equivalent foreign keys eventId and leadId. 
Event.belongsToMany(Lead, {through: 'attendance'});
Lead.belongsToMany(Event, {through: 'attendance'});

EventType.hasMany(Event);
//adds EventTypeId to Event. Instances of EventType will get methods getEvent and setEvent
//the below instead? 
Event.belongsTo(EventType);

//is this going to be necessary? i feel like the comments should go on the indiv instances of events, not their types
EventType.hasMany(Comment);
//adds EventTypeId to Comment. Instances of EventType will get methods getEvent and setEvent

Event.hasMany(EventStaffing, {as: 'staffing'});
//adds eventId to EventStaffing. Instances of Event will get methods getStaffing and setStaffing.

Event.hasMany(Comment, {as: 'eventComment'});
//adds eventId to Comment. Instances of Event will get methods geteventComment and seteventComment.

//should this just be a field on the event? like successRating? 
// Event.hasMany(EventRating);

Lead.hasMany(Comment);

User.hasMany(EventStaffing);

//difference between these two again? i think the latter is clearer
User.hasMany(Comment); 
//adds userId to Comment. Instances of User will get methods getComment and setComment (but do we need these?)
Comment.belongsTo(User); // adds userId to comment


module.exports = db;

