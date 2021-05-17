import React from 'react';
import styled, { css } from 'styled-components'

const AgendaCard = styled.div`
    margin: 2em;
    padding: 1.5em;
    border: 1px solid black;
    border-radius: 5px;
    background: #e9f7fc;
`

const AgendaButton = styled.button`
    margin: 0.5em 1em 1em 0em;
    padding: 0.5em;
    border-radius: 3px;
    width: 8em;
    background: transparent;

    ${props => {
        if (props.delete) {
            return css`
                background: red;
                color: white;
                font-weight: bold;
                `
        }
        else if (props.edit){
            return css`
                background: #4CAF50;
                color: white;
                font-weight: bold;
                `
        }
    }
    }
`

// passive component
class AgendaCardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //simulasi yg berujung gagal
        // throw "Component ngga mau kebikin cuy!";
    }

    handleDeleteButtonClick = () => {
        let idToDelete = this.props.id;
        this.props.handleAgendaDelete(idToDelete);
        // alert(idToDelete);
    }

    handleEditButtonClick = () => {
        let idToUpdate = this.props.id;
        this.props.handleAgendaEdit(idToUpdate);
    }

    render() {
        return (
            <AgendaCard>
                <h2>{this.props.agendaName}</h2>
                <p>{this.props.agendaDate} | {this.props.agendaTime}</p>
                <p>{this.props.agendaDesc}</p>
                <AgendaButton edit onClick={this.handleEditButtonClick}>Edit Agenda</AgendaButton>
                <AgendaButton delete onClick={this.handleDeleteButtonClick}>Delete</AgendaButton>
            </AgendaCard>
        );
    }
}

export default AgendaCardComponent;