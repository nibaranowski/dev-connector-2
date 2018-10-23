const Validator = require('validator');
const isEmpty = require('./is-empty'); // equivalent to import isEmpty from './is-empty'

module.exports = function validatePostInput(data) {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : ''; //transport undefined or empty to empty stirng

    //text validation

    if(!Validator.isLength(data.text, { min: 10, max: 300 })) {
        errors.text = 'Post must be between 10 and 300 characters'
    }


    if(Validator.isEmpty(data.text)) { //isEmpty must be last
        errors.text = 'Text field is required';
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};


    // const newPost = new Post({
    //     text: req.body.text,
    //     name: req.body.name,
    //     avatar: req.body.name,
    //     user: req.user.id
    // });
