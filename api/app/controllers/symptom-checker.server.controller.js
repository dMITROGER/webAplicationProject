//load machine_learning module
let ml = require('machine_learning');

// Create a new 'render' controller method
exports.checkConditions = function (req, res) {
    // module.exports.checkConditions = function (req, res) {
    //read the new data
    let coughing = req.body.coughing;
    console.log(coughing);
    let highFever = req.body.highFever;
    console.log(highFever);
    let sniffling = req.body.sniffling;
    console.log(sniffling);
    let aching = req.body.aching;
    console.log(aching);

    let data = [
        ['no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'yes'],
        ['no', 'no', 'yes', 'no'],
        ['no', 'no', 'yes', 'yes'],
        ['no', 'yes', 'no', 'no'],
        ['no', 'yes', 'no', 'yes'],
        ['no', 'yes', 'yes', 'no'],
        ['no', 'yes', 'yes', 'yes'],
        ['yes', 'no', 'no', 'no'],
        ['yes', 'no', 'no', 'yes'], 
        ['yes', 'no', 'yes', 'no'], 
        ['yes', 'no', 'yes', 'yes'],
        ['yes', 'yes', 'no', 'no'],
        ['yes', 'yes', 'no', 'yes'],
        ['yes', 'yes', 'yes', 'no'],
        ['yes', 'yes', 'yes', 'yes']
    ];
    //decison made
    let result = ['Common cold', 'Common cold', 'Common cold', 'Acute Sinusitis', 'None', 'Common cold', 'Bacterial Pneumonia',
        'West Nile Virus', 'Whooping Cough', 'Bacterial Pneumonia', 'Laryngitis', 'Chronic sinusitis', 'Viral Pneumonia', 'Asthma', 'Tonsillitis', 'Erythema multiforme'];

    //create new Decision Tree using this dataset
    let dt = new ml.DecisionTree({
        data: data,
        result: result
    });

    dt.build();

    console.log("Classify : ", dt.classify([coughing, highFever, sniffling, aching]));
    let classificationResult = dt.classify([coughing, highFever, sniffling, aching]);
    let tree = dt.getTree();
    dt.prune(1.0); // 1.0 : mingain.

    let classsification = JSON.stringify(classificationResult);
    let classResult = classsification.substring(2, classsification.length - 4);

    let medicalAttention = '';

    if (classResult === "Common cold" || classResult === "None" || classResult === "Whooping Cough" || classResult === "Acute Sinusitis") {
        medicalAttention = 'No';
    } else {
        medicalAttention = "Yes";
    }

    let obj = {
        condition: classResult,
        attn: medicalAttention
    };

    return res.status(200).json(obj);
};
