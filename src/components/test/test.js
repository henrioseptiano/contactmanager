import React, {Component} from 'react';

class Test extends Component {
    state = {
        title:'',
        body:''
    };

    //render will fires when components are mounted
    //no need to use arrow function, since its natural lifecycle
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    this.setState({
                        title: data.title,
                        body: data.body
                    });
                }
            );
    }
    /*
    //render will fires when components before mounted
    UNSAFE_componentWillMount(){
        console.log('componentWillMount...');
    }
    //this will run when component is update
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    //this will run when component are triggered to be update
    UNSAFE_componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    //componentreceivednewproperties will run
    //the sucks is when component willReceiveProps, componentWillMount, componentWillUpdate would be deprecated
    //reactnext version which is 17, use UNSAFE_componentWillReceiveProprs
    UNSAFE_componentWillReceiveProps(nextProps, nextState){
        console.log("componentWillReceiveProps");
    }
    */
    /*static getDerivedStateFromProps(nextProps, prevState){
        //cannot use setState on this static function from react
        return {
           test:'something'
        };
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
    }*/

    render() {
        const {title, body} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        );
    }
}

export default Test;
