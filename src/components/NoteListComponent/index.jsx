import React from 'react';

// passive component
class NoteListComponent extends React.Component {
    constructor(props){
        super(props);
    }

    handleDeleteButtonClick = () => {
        let idToDelete = this.props.id;
        this.props.handleDeleteNote(idToDelete);
        // alert(idToDelete);
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.note}</p>
                <button onClick={this.handleDeleteButtonClick}>Delete</button>
            </div>
        );
    }
}

export default NoteListComponent;