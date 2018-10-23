const Validator = require('validator');
const isEmpty = require('./is-empty'); // equivalent to import isEmpty from './is-empty'

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : ''; //transport undefined or empty to empty stirng
    data.email = !isEmpty(data.email) ? data.email : ''; //transport undefined or empty to empty stirng
    data.password = !isEmpty(data.password) ? data.password : ''; //transport undefined or empty to empty stirng
    data.password2 = !isEmpty(data.password2) ? data.password2 : ''; //transport undefined or empty to empty stirng

    //name validation
    if(!Validator.isLength(data.name, {min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters' //we add the 'name' property here
    }

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    //email validation
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    //password Validation
    if(!Validator.isLength(data.password, {min: 6, max: 30 })) {
        errors.password = 'Email must be at least 6 characters' //we add the 'name' property here
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    //password2 Validation
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required';
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};
