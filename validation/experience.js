const Validator = require('validator');
const isEmpty = require('./is-empty'); // equivalent to import isEmpty from './is-empty'

module.exports = function validateExperienceInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : ''; //transport undefined or empty to empty stirng
    data.company = !isEmpty(data.company) ? data.company : ''; //transport undefined or empty to empty stirng
    data.from = !isEmpty(data.from) ? data.from : ''; //transport undefined or empty to empty stirng

    //title validation
    if(Validator.isEmpty(data.title)) {
        errors.title = 'Job title field is required';
    }

    if(Validator.isEmpty(data.company)) {
        errors.company = 'Company title field is required';
    }

    if(Validator.isEmpty(data.from)) {
        errors.from = 'From date field is required';
    }


    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};
