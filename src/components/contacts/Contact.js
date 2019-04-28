import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
//import './contact.css';
class Contact extends Component{
    state = {
        showContactInfo:false
    };
    /*constructor(){
        super();
        this.state = {};
        this.onShowClick = this.onShowClick.bind(this);
    }*/
    /*static propTypes = {
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    };*/
    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type:'DELETE_CONTACT', payload:id});
            /*.then(res => {
                dispatch({type:'DELETE_CONTACT', payload:id});
            });*/
        }catch(e){
            dispatch({type:'DELETE_CONTACT', payload:id});
        };
        //dispatch({type:'DELETE_CONTACT', payload:id});
        //this.props.deleteClickHandler();
    };
    onShowClick = e => {
        this.setState({showContactInfo:!this.state.showContactInfo});
    };
    render(){
        //const {name, email, phone} = this.props;
        //this.onShowClick.bind(this) buat bind event this and more parameters
        const {contact} = this.props;
        //this.props.contact;
        const { showContactInfo } = this.state;
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{contact.name} <i onClick={this.onShowClick}
                                                  className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>
                                <i className="fas fa-times" style={{cursor:'pointer', float:'right', color:'red'}}
                                   onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}></i>
                                <Link to={`contact/edit/${contact.id}`}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{
                                            cursor:'pointer',
                                            float:'right',
                                            color:'black',
                                            marginRight: '1rem'
                                        }}
                                    >

                                    </i>
                                </Link>
                            </h4>
                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {contact.email}</li>
                                <li className="list-group-item">Phone: {contact.phone}</li>
                            </ul>) : null}

                        </div>
                    )
                }}
            </Consumer>
        );
        /*<Return div className="card card-body mb-3">
                <h4>{contact.name} <i onClick={this.onShowClick}
                                      className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>
                    <i className="fas fa-times" style={{cursor:'pointer', float:'right', color:'red'}} onClick={this.onDeleteClick}></i>
                </h4>
                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {contact.email}</li>
                    <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>) : null}

            </div>*/
    }
}

/*Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}*/

/*Contact.propTypes = {
   contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};*/
Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;