import React, {Component} from 'react';
import Contact from './Contact';
import { Consumer } from '../../context'

class Contacts extends Component {
    /*constructor(){
        super();
        this.state = {

        };
    }*/

    /*deleteContact = (id) => {
        //destruct
        const {contacts} = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
           contacts:newContacts
        });
    };*/

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts  } = value;
                    /*
                    return(
                        <React.Fragment>
                            {value.contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)}/>
                            ))}
                        </React.Fragment>
                    )*/
                    return(
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Contact</span>List
                            </h1>
                            {value.contacts.map(contact => (
                                <Contact key={contact.id} contact={contact}/>
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
        /*
        const { contacts } = this.state;

        return <div>{contacts.map(
            contact => (<h1>{contact.name}</h1>)
        )}</div>;
        return <div>{contacts.map(
            contact => <Contact key={contact.id} contact={contact}/>
        )}</div>
       return (
           <React.Fragment>
               {contacts.map(contact => (
                   <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)}/>
               ))}
           </React.Fragment>
       );*/
    }
}

export default Contacts;