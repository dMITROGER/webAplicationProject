const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: 'MY_SECRET',
    // puts payload into the request for next middleware
    userProperty: 'payload'
});

const ctlrUser = require('../controllers/user.server.controller');
const ctrlAuth = require('../controllers/authentication.server.controller');
const ctrlEmerg = require('../controllers/emergency-alert.server.controller');
const ctrlSymptomChecker = require('../controllers/symptom-checker.server.controller');

router.get('/users', ctlrUser.GetUsers);
router.get('/users/:id', ctlrUser.GetUserDetails);

router.post('/motivations', ctlrUser.SendMotivation);

router.post('/vitalSigns', ctlrUser.EnterVitalSigns);

router.post('/emergency', ctrlEmerg.submitEmergencyAlert);

router.post('/symptomchecker', ctrlSymptomChecker.checkConditions);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;