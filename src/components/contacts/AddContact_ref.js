import React, {Component} from 'react';

class AddContact_ref extends Component {
    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        const contact = {
          name: this.nameInput.current.value,
          email: this.emailInput.current.value,
          phone: this.phoneInput.current.value
        };

        console.log(contact);
    };
    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@yahoo.com',
        phone: '777-777-777'
    };
    render() {
        const {name, email, phone} = this.props;
        //defaultValue is uncontrolled component
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="from-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter Name"
                                   defaultValue={name} ref={this.nameInput}/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="form-control form-control-lg"
                                   defaultValue={email} placeholder="Enter Email" ref={this.emailInput}/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" className="form-control form-control-lg"
                                   defaultValue={phone} placeholder="Enter Phone" ref={this.phoneInput}/>
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact_ref;