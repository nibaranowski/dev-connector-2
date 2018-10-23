const Validator = require('validator');
const isEmpty = require('./is-empty'); // equivalent to import isEmpty from './is-empty'

module.exports = function validateEducationInput(data) {
    let errors = {};

    data.school = !isEmpty(data.school) ? data.school : ''; //transport undefined or empty to empty stirng
    data.degree = !isEmpty(data.degree) ? data.degree : ''; //transport undefined or empty to empty stirng
    data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : ''; //transport undefined or empty to empty stirng
    data.from = !isEmpty(data.from) ? data.from : ''; //transport undefined or empty to empty stirng

    //school validation
    if(Validator.isEmpty(data.school)) {
        errors.school = 'School field is required';
    }

    if(Validator.isEmpty(data.degree)) {
        errors.degree = 'Degree field is required';
    }

    if(Validator.isEmpty(data.fieldofstudy)) {
        errors.fieldofstudy = 'Field of study is required';
    }

    if(Validator.isEmpty(data.from)) {
        errors.from = 'From date field is required';
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};
