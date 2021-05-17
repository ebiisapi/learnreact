import React from 'react';
import moment from 'moment';
import { Form, Button } from 'react-bootstrap';
import styles from './style.module.css';

class AgendaFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputAgendaTitle: this.props.mode == "edit" ? this.props.dataEdit.agendaName || "" : "",
            inputAgendaDesc: this.props.mode == "edit" ? this.props.dataEdit.agendaDesc || "" : "",
            inputAgendaDate: this.props.mode == "edit" ? this.props.dataEdit.agendaDate || "" : "",
            inputAgendaTime: this.props.mode == "edit" ? this.props.dataEdit.agendaTime || "" : "",
            btnLabel: this.props.mode == "edit" ? "Edit Agenda" : "Add Agenda",
            oldAgendaData: this.props.mode == "edit" ? this.props.dataEdit : {}
        }
    }

    handleUserKeyDown = (event) => {
        // console.log("Detected Keydown.");
        // console.log(`Key typed: ${event.key}`);
    }

    //bisa dilakukan tapi kurang efisien
    handleUserKeyUp = (event) => {
        // let char = event.key;
        // let currAgendaTitle = this.state.inputAgendaTitle;
        // currAgendaTitle = currAgendaTitle + char;
        // this.setState({
        //     inputAgendaTitle: currAgendaTitle
        // });
    }

    componentDidUpdate() {
        //cek isi state setiap ada perubahan
        // console.log(this.state);
    }

    handleTitleInput = (event) => {
        let title = event.target.value;
        this.setState({
            inputAgendaTitle: title
        });
    }

    handleInputDesc = (event) => {
        let desc = event.target.value;
        this.setState({
            inputAgendaDesc: desc
        });
    }

    handleInputDate = (event) => {
        let date = event.target.value;
        this.setState({
            inputAgendaDate: date
        });
    }

    handleInputTime = (event) => {
        let time = event.target.value;
        this.setState({
            inputAgendaTime: time
        });
    }

    handleFormSubmit = (event) => {
        // alert("Submit Data.");

        event.preventDefault();

        let agendaTitle = this.state.inputAgendaTitle;
        let agendaDesc = this.state.inputAgendaDesc;
        let agendaDate = this.state.inputAgendaDate;
        let agendaTime = this.state.inputAgendaTime;
        agendaDate = moment(agendaDate).format("dddd, D MMMM YYYY");

        let agendaObject = {
            agendaName: agendaTitle,
            agendaDesc: agendaDesc,
            agendaDate: agendaDate,
            agendaTime: agendaTime
        }

        let idToEdit = -1;
        if (this.props.mode == "edit") {
            idToEdit = this.props.dataEdit.id;
        }

        // passing ke parentnya
        this.props.handleAddAgenda(agendaObject, this.props.mode, idToEdit);
    }

    render() {
        // var agendaName = this.state.oldAgendaData.agendaName || "";
        // var agendaDesc = this.state.oldAgendaData.agendaDesc || "";

        // //TODO: sesuaikan format date time dengan moment.js
        // var agendaDate = this.state.oldAgendaData.agendaDate || "";
        // var agendaTime = this.state.oldAgendaData.agendaTime || "";
        return (
            <div className={styles['form-container']}>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="agendaTitle">
                        <Form.Label className={styles.formlabel}>Agenda Title</Form.Label>
                        <Form.Control type="text" placeholder="What do you want to do"
                            // onKeyDown={this.handleUserKeyDown} 
                            // onKeyUp={this.handleUserKeyUp}
                            onInput={this.handleTitleInput}
                            value={this.state.inputAgendaTitle}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="agendaDesc">
                        <Form.Label className={styles.formlabel}>Agenda Description</Form.Label>
                        <Form.Control as="textarea" type="text"
                            onInput={this.handleInputDesc}
                            value={this.state.inputAgendaDesc}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="agendaDate">
                        <Form.Label className={styles.formlabel}>Agenda Date</Form.Label>
                        <Form.Control type="date"
                            onChange={this.handleInputDate}
                            value={this.state.inputAgendaDate}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="agendaTime">
                        <Form.Label className={styles.formlabel}>Agenda Time</Form.Label>
                        <Form.Control type="time"
                            onChange={this.handleInputTime}
                            value={this.state.inputAgendaTime}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="btnSubmit">
                        <Form.Label>Submit</Form.Label>
                        <Form.Control type="submit" value={this.state.btnLabel}></Form.Control>
                    </Form.Group>

                    {/* <Button variant="success">Add Agenda</Button> */}

                </Form>
            </div>

        );
    }
}

export default AgendaFormComponent;