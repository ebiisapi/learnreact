import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import AgendaFormComponent from "../AgendaFormComponent";

function EditAgendaModal(props) {
    // baca react context

    const handleOnHideClick = () => {
        props.handleCloseModal();
    }

    return (
        <Modal show={props.showModal} onHide={handleOnHideClick}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Agenda</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AgendaFormComponent 
                handleAddAgenda={props.handleAddAgenda}
                dataEdit={props.dataEdit} mode="edit"></AgendaFormComponent>
            </Modal.Body>

            {/* <Modal.Footer>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export {
    EditAgendaModal
}