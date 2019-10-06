export interface User {
    _id?: string;
    email: string;
    password?: string;
    name?: string;
    type?: string;
    exp?: number;

    // FOR NURSES ONLY
    authoredMotivation?: Motivation[];
    receivedEmergencyAlerts?: EmergencyAlert[];

    // FOR PATIENTS ONLY
    vitalSigns?: VitalSigns[];
    receivedMotivation?: Motivation[];
    sentEmergencyAlerts?: EmergencyAlert[];
}

export interface Motivation {
    _id?: string;
    author: User;
    patient: User;
    message: string;
    type: string;
    dateRecorded?: Date;
}

export interface EmergencyAlert {
    _id?: string;
    sender: User;
    receiver: User;
    message: string;
    dateRecorded?: Date;
}

export interface VitalSigns {
    _id?: string;
    // measured in degrees celsius
    bodyTemperature: Number;
    // measured in bpm, beats per minute
    pulseRate: Number;
    // measured in bpm, breaths per minute
    repirationRate: Number;
    // bp is recorded as two readings: High systolic pressure and lower diastolic or resting pressure; normal reading would be 120/80
    bloodPressure: {
        systolic: Number,
        diastolic: Number
    };
    comments: String;
    patient: User;
    recorder: User;
    dateRecorded?: Date;
}
