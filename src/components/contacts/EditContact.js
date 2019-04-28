import React, {Component} from 'react';
import {Consumer} from '../../context';
//import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name:'',
        email:'',
        phone:'',
        errors:{}
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        });
    }
    /*onNameChange = (e) => {
        this.setState({name: e.target.value});
    };

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    onPhoneChange = (e) => {
        this.setState({phone: e.target.value});
    }*/

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        /* e.preventDefault();
         console.log(this.state);*/
        this.setState({[e.target.name] : e.target.value});

        const {name, email, phone, errors} = this.state;
        console.log(phone);
        //check for errors
        if(name === ''){
            this.setState({errors: {name:'Name is Required'}})
            return;
        }
        if(email === ''){
            this.setState({errors: {email:'Email is Required'}});
            return;
        }
        if(phone === ''){
            this.setState({errors: {phone:'Phone is Required'}});
            return;
        }

        const updContact = {
            name,
            email,
            phone
        };

        const { id } = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

        dispatch({type:'UPDATE_CONTACT', payload:res.data});

        //clear state
        this.setState({name:'', email:'',phone:'', errors:{}});

        this.props.history.push('/');

    };
    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@yahoo.com',
        phone: '777-777-777',
        errors:{}
    };
    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup error={errors.name} label="Name" onChange={this.onChange} value={name} placeholder="Enter Name" name="name"/>
                                    <TextInputGroup error={errors.email} label="Email" onChange={this.onChange} value={email} placeholder="Enter Email" name="email" type="email"/>
                                    <TextInputGroup error={errors.phone} label="Phone" onChange={this.onChange} value={phone} placeholder="Enter Phone" name="phone"/>
                                    <input type="submit" value="Update Contact"  className="btn btn-light btn-block"/>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
        /*return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="from-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" onChange={this.onChange} className="form-control form-control-lg" placeholder="Enter Name" value={name}/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" onChange={this.onChange} className="form-control form-control-lg" value={email} placeholder="Enter Email"/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" onChange={this.onChange} className="form-control form-control-lg" value={phone} placeholder="Enter Phone"/>
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        );*/
        /*return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="from-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter Name" value={name}/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="form-control form-control-lg" value={email} placeholder="Enter Email"/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" className="form-control form-control-lg" value={phone} placeholder="Enter Phone"/>
                        </div>
                        <input type="submit" value="Add Contact" onSubmit={this.onSubmit} className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        );*/
    }
}

export default EditContact;