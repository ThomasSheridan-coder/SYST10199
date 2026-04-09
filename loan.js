"use strict";
// This line of code will trun on strict mode.
// It will enforce a cleaner and safer JavaScript program


class Loan {
    // This constructor will run when a brand new loan object when it is created
    constructor(amount, rate) {
        this.amount = amount;
        // This line of code will store the loan amount (the principal)

        this.rate = rate;
        // This line of code will store the interest rate (as a percentage)
    }

    // This program will calculate the annual interest rate that is based on the amount and rate
    annualInterest() {
        return this.amount * this.rate / 100;
        // The formula is: Principal x Rate (%) Divided by 100
    }

    // This program will calculate the monthly interest
    monthlyInterest() {
        return this.annualInterest() / 12;
        // The return program will take the annual interest and devides it by 12 months
    }

    // This program will calculate the total interest in the span of 3 years
    totalInterest() {
        return this.annualInterest() * 3;
        // This return code will assume the 3 year loan duration
    }

    // This program will return all of the loan data into one structured object
    getData() {
        return {
            amount: this.amount,
            // The oringinal loan amount

            rate: this.rate,
            // The interest rate

            annualInterest: this.annualInterest(),
            // This will call the method to calculate the interest yearly

            monthlyInterest: this.monthlyInterest(),
            // This will call the method to calculate the interest monthly

            totalInterest: this.totalInterest()
            // This will call the method to calculate the total interest within the 3 year window
        };
    }
}

// This line of code will export the loan class so it can be used inside other files
module.exports = Loan;