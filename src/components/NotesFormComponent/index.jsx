import React from 'react';
import { Form } from 'react-bootstrap';

class NotesFormComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputTitle: "",
            inputNote: ""
        }
    }

    handleFormSubmit = (event) => {

        event.preventDefault();

        let title = this.state.inputTitle;
        let note = this.state.inputNote;
        
        let noteObject = {
            title: title,
            note: note
        }

        // passing ke parentnya
        this.props.handleAddNewNote(noteObject);
    }

    handleTitleInput = (event) => {
        let currTitle = event.target.value;
        this.setState({
            inputTitle: currTitle
        });
    }

    handleNoteInput = (event) => {
        let currNote = event.target.value;
        this.setState({
            inputNote: currNote
        });
    }

    render(){
        return (
            <Form onSubmit={this.handleFormSubmit}>

                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter the title" onInput={this.handleTitleInput} />
                </Form.Group>

                <Form.Group controlId="note">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="textarea" onInput={this.handleNoteInput} />
                </Form.Group>

                <Form.Group controlId="btnSubmit">
                    <Form.Label>Submit</Form.Label>
                    <Form.Control type="submit" value="Add Note"></Form.Control>
                </Form.Group>
            </Form>
        );
    }
}

export default NotesFormComponent;