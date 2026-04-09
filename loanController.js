"use strict";
// this command will install strict mode inside JavaScript
// It can help catch mistakes that are inside of the code

const Loan = require("../models/loan");
// This program will bring in the loan model from the models folder

// This is the controller function that will render in the home page of the website
exports.renderHome = (req, res) => {
    res.render("index");
    // This program renders in the "index" view (home page)
};

// This is the code to render in the loan detals
exports.calculateLoan = (req, res) => {

    // Extracting the 'amount' and the 'rate' from the query parameters and will convert them to numbers
    const amount = parseFloat(req.query.amount);
    const rate = parseFloat(req.query.rate);

    // This code will check if any of the parameters are missing
    if (req.query.amount === undefined || req.query.rate === undefined) {
        res.render("result", {
            error: "Missing required parameters. Please provide the amount and rate.",
            loan: null
        });
        // Renders in the result page with the error message and no loan data
        return; // This code will stop the execution of the code
    }

    // This program will validate if the inputs are numbers, and if they are grater than 0
    if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate <= 0) {
        res.render("result", {
            error: "Invalid values. Amount and rate must be positive numbers.",
            loan: null
        });
        // Retruns back the result page with the inclusion of the validation error
        return; // This code stops the further execution of the program
    }

    // This line of code will create a new loan object using the validated inputs
    const loan = new Loan(amount, rate);

    // This program will render in the result page with the calculated loan data
    res.render("result", {
        error: null, // this means there is no error
        loan: loan.getData()
        // This line of code will call a method from the loan model so it can get the computed results
    });
};