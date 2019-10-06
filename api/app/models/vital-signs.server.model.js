

const mongoose = require('mongoose');

/**
 * Vital signs are a group of the 4 to 6 most important signs that indicate 
 * the status of the body’s vital functions.
 */
const vitalSignsSchema = mongoose.Schema({
    // measured in degrees celsius
    bodyTemperature: Number,
    // measured in bpm, beats per minute   
    pulseRate: Number,
    // measured in bpm, breaths per minute
    repirationRate: Number,
    // bp is recorded as two readings: High systolic pressure and lower diastolic or resting pressure; normal reading would be 120/80
    bloodPressure: {
        systolic: Number,
        diastolic: Number
    },
    comments: String,
    patient: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    recorder: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    dateRecorded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VitalSigns', vitalSignsSchema);
