


const mongoose = require('mongoose');
const User = require('../models/user.server.model');
const Motivation = require('../models/motivation.server.model');
const EmergencyAlert = require('../models/emergency-alert.server.model');
const VitalSigns = require('../models/vital-signs.server.model');


module.exports.submitEmergencyAlert = function (req, res, next) {
    let emergency = new EmergencyAlert();
    emergency.sender = req.body.sender;
    emergency.receiver = req.body.receiver;
    emergency.message = req.body.message;
    console.log(Date.now);

    User.findByIdAndUpdate(emergency.sender,
        { $push: { sentEmergencyAlerts: emergency._id } },
        { new: true },
        (err, updatedPatient) => {
            if (err) {
                return res.status(400).send('Could not update Patient details');
            } else {
                console.log('Detials saved');
                User.findByIdAndUpdate(emergency.receiver,
                    { $push: { receivedEmergencyAlerts: emergency._id } },
                    { new: true },
                    (err, updatedNurse) => {
                        if (err) {
                            return res.status(400).send('Could not update Nurse details');
                        } else {
                            emergency.save((err) => {
                                if (err) {
                                    return res.status(400).send('Could not save Emergency alert details');
                                } else {
                                    return res.status(200).json(emergency);
                                }
                            })
                        }
                    }

                )
            }
        });

};