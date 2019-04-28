import React from 'react';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import { Provider } from './context';
import NotFound from './components/pages/NotFound';
import Test from './components/test/test';
function App() {
  /*return React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', null, 'The App Component')
  );*/

  //equivalents
  /*
   const name = "Larry";
   const showHello = false;
   const showMath = true;
   const num1 = 40;
   const num2 = 23;

   let math;
   if(showMath){
     math = <h4> {num1} + {num2} = {num1 + num2}</h4>;
   }else{
     math = null;
   }

   return (
       <div className="App">
          <h1>The App Component</h1>
          {showHello ? <h4>Hello {name}</h4> : null}
         {math}
      </div>
   );
   inside container
    <AddContact/>
    <Contacts/>
    passing params
    <Route exact path="/about/:name" component={About}/>
   */
  return (
      <Provider>
          <Router basename={process.env.PUBLIC_URL}>
              <div className="App">
                <Header branding="Contact Manager"/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Contacts}/>
                        <Route exact path="/contact/add" component={AddContact}/>
                        <Route exact path="/contact/edit/:id" component={EditContact}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/test" component={Test}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
