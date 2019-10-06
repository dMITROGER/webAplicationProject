
const mongoose = require('mongoose');
const User = require('../models/user.server.model');
const Motivation = require('../models/motivation.server.model');
const EmergencyAlert = require('../models/emergency-alert.server.model');
const VitalSigns = require('../models/vital-signs.server.model');


module.exports.GetUsers = function (req, res, next) {
    User.find({},
        '-hash -salt',
        (err, users) => {
            if (err) {
                return res.status(400).send({ message: err });
            }
            console.log('Get List of Users:', users);
            return res.status(200).json(users);
        }
    )
}

module.exports.GetUserDetails = function (req, res, next) {
    let id = req.params.id;

    User.findOne(
        { _id: id },
        '-hash -salt'
    )
        .populate({
            path: 'authoredMotivation receivedEmergencyAlerts vitalSigns receivedMotivation sentEmergencyAlerts',
            populate: 'author'
        })
        .exec((err, user) => {
            if (err) {
                return res.status(400).send({ message: err });
            }
            console.log('Get User Details:', user);
            return res.status(200).json(user);
        });
};

module.exports.EnterVitalSigns = function (req, res, next) {
    // console.log('req body: ', req.body);

    let vitalSigns = new VitalSigns();
    vitalSigns.bodyTemperature = req.body.bodyTemperature;
    vitalSigns.pulseRate = req.body.pulseRate;
    vitalSigns.repirationRate = req.body.repirationRate;
    vitalSigns.bloodPressure = req.body.bloodPressure;
    vitalSigns.comments = req.body.comments;
    vitalSigns.patient = req.body.patient;
    vitalSigns.recorder = req.body.recorder;

    // console.log('vitalsigns doc', vitalSigns);

    // User.findByIdAndUpdate(vitalSigns.recorder,
    //     { $push: { authoredMotivation: vitalSigns._id } },
    //     { new: true },
    //     (err, updatedUser) => {
    //         if (err) {
    //             return res.status(400).send('Could not update Recorder\'s details');
    //         } else {
    User.findByIdAndUpdate(vitalSigns.patient,
        { $push: { vitalSigns: vitalSigns._id } },
        { new: true },
        (err, updatedPatient) => {
            if (err) {
                return res.status(400).send('Could not update Patient details');
            } else {
                vitalSigns.save((err) => {
                    if (err) {
                        return res.status(400).send('Could not save VitalSigns details');
                    } else {
                        return res.status(200).json(vitalSigns);
                    }
                })
            }
        }

    )
    //     }
    // })
}

// NURSE FUNCTIONS ++++++++++++++++++++++++++++++
// create new motivation document
// push ref to patient 
// push ref to nurse

module.exports.SendMotivation = function (req, res, next) {
    let motivation = new Motivation();
    motivation.author = req.body.author;
    motivation.patient = req.body.patient;
    motivation.message = req.body.message;
    motivation.type = req.body.type;
    // console.log('req body: ', req.body);
    // console.log('motivation doc', motivation);

    User.findByIdAndUpdate(motivation.author,
        { $push: { authoredMotivation: motivation._id } },
        { new: true },
        (err, updatedNurse) => {
            if (err) {
                return res.status(400).send('Could not update Nurse details');
            } else {
                User.findByIdAndUpdate(motivation.patient,
                    { $push: { receivedMotivation: motivation._id } },
                    { new: true },
                    (err, updatedPatient) => {
                        if (err) {
                            return res.status(400).send('Could not update Patient details');
                        } else {
                            motivation.save((err) => {
                                if (err) {
                                    return res.status(400).send('Could not save Motivation details');
                                } else {
                                    return res.status(200).json(motivation);
                                }
                            })
                        }
                    }

                )
            }
        });
};

// PATIENT FUNCTIONS ++++++++++++++++++++++++++++
