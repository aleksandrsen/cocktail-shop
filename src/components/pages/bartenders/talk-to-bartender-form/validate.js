const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = "This field is required!";
    }

    if (values.name && values.name.length <= 2) {
        errors.name = "Name should contain at least 3 characters";
    }

    if (values.name && values.name.split(' ').length > 2) {
        errors.name = 'Full name should contain name and surname, "Name Surname"';
    }

    if (!values.email) {
        errors.email = "This field is required!";
    }

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email is not valid format';
    }

    if (!values.message) {
        errors.message = "This field is required!";
    }

    if (values.message && values.message.length <= 50) {
        errors.message = "Message should contain at least 50 letters";
    }

    return errors;
};

export default validate;