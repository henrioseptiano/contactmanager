import React, {Component} from 'react';

export default (props) => {
    //get params name = {props.match.params.name}
    return (
        <div>
            <h1 className="display-4">
                About Contact Manager
            </h1>
            <p className="loead">Simple app to manage contacts</p>
            <p className="text-secondary">v1.0.0</p>
        </div>
    );
};