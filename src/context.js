import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.map(contact => contact.id == action.payload.id ? contact = action.payload : contact)
            };
        default:
            return state;
    }
};
//states
export class Provider extends Component{
    state = {
        contacts:[
            /*{
                id:1,
                name:'John Doe',
                email:'jdoe@gmail.com',
                phone:'555-555-555'
            },
            {
                id:2,
                name:'Karen Williams',
                email:'karen@gmail.com',
                phone:'222-222-222'
            },
            {
                id:3,
                name:'Henry Johnson',
                email:'henry@gmail.com',
                phone:'111-111-111'
            }*/
        ],
        dispatch: action =>{
            this.setState(state => reducer(state,action))
        }
    }
    //make the function async. since this asynchronus function, axios API need to await to finish and stored into variables
    async componentDidMount() {
        //axios.get('https://jsonplaceholder.typicode.com/users')
        //             .then(res => this.setState({contacts:res.data}))
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({contacts: res.data});

    }

    /*componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }*/

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

