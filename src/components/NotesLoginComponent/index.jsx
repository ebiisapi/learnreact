import React from 'react';
import { Form } from 'react-bootstrap';

class NotesLoginComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputUserName: "",
            inputUserEmail: ""
        }
    }

    handleFormSubmit = (event) => {

        event.preventDefault();

        let userName = this.state.inputUserName;
        let userEmail = this.state.inputUserEmail;
        
        let userObject = {
            userName: userName,
            userEmail: userEmail
        }

        // passing ke parentnya
        this.props.handleInputUserInfo(userObject);
    }

    handleUserNameInput = (event) => {
        let currUserName = event.target.value;
        this.setState({
            inputUserName: currUserName
        });
    }

    handleUserEmailInput = (event) => {
        let currUserEmail = event.target.value;
        this.setState({
            inputUserEmail: currUserEmail
        });
    }

    render(){
        return (
            <Form onSubmit={this.handleFormSubmit}>

                <Form.Group controlId="userName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onInput={this.handleUserNameInput} />
                </Form.Group>

                <Form.Group controlId="userEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" onInput={this.handleUserEmailInput} />
                </Form.Group>

                <Form.Group controlId="btnSubmit">
                    <Form.Label>Submit</Form.Label>
                    <Form.Control type="submit" value="Enter"></Form.Control>
                </Form.Group>
            </Form>
        );
    }
}

export default NotesLoginComponent;