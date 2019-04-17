import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import SelectInput from './selectInput';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;

        // const errors = {};

        // const { data } = this.state;
        // if (data.username.trim() === '')
        //     errors.username = 'Username is required.';
        // if (data.password.trim() === '')
        //     errors.password = 'Password is required.';

        // return Object.keys(errors).length === 0 ? null : errors;
    }

    // validations with Joi
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;

    }

    // Basic validation for property
    // validateProperty = ({ name, value }) => {
    //     if (name === 'username') {
    //         if (value.trim() === '') return 'Username is required.';
    //     }

    //     if (name === 'password') {
    //         if (value.trim() === '') return 'Password is required';
    //     }
    // }

    // handleChange = {e} => {
    //     const data = { ...this.state.data };
    //     data[e.currentTarget.name] = e.currentTarget.value;
    //     this.setState({ data });
    // }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
        // call server
    }

    handleChange = ({ currentTarget: input }) => {

        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    }

    renderButton(label) {
        return <button disabled={this.validate()} className="btn btn-primary">{label}</button>
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;
        return <Input
            type={type}
            name={name}
            value={data[name]}
            label={label}
            onChange={this.handleChange}
            error={errors[name]} />
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;

        return (<SelectInput
            name={name}
            value={data[name]}
            label={label}
            options = {options}
            onChange={this.handleChange}
            error={errors[name]} />
            )
    }



}

export default Form;