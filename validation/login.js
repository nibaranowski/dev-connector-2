const Validator = require('validator');
const isEmpty = require('./is-empty'); // equivalent to import isEmpty from './is-empty'

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : ''; //transport undefined or empty to empty stirng
    data.password = !isEmpty(data.password) ? data.password : ''; //transport undefined or empty to empty stirng

    //email validation


    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    //password Validation
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};
