import { useState } from "react";
import NoteListComponent from "../NoteListComponent";
import NotesFormComponent from "../NotesFormComponent";
import NotesLoginComponent from "../NotesLoginComponent";

//TIPS: ctrl + k, ctrl + f --> ini untuk merapihkan
function NotesFunctionalComponent(props) {

    const [userInformation, setUserInformation] = useState(
        {
            userName: "",
            userEmail: ""
        }
    );

    const [notes, setNotes] = useState([
        {
            title: "The Daisy",
            note: "Bellis perennis, the daisy, is a common European species of the family Asteraceae, often considered the archetypal species of that name. To distinguish this species from other daisies it is sometimes qualified as common daisy, lawn daisy or English daisy. Historically, it has also been widely known as bruisewort, and occasionally woundwort (although the common name woundwort is now more closely associated with the genus Stachys)."
        },
        {
            title: "The Peony",
            note: "The peony or paeony is a flowering plant in the genus Paeonia, the only genus in the family Paeoniaceae. Peonies are native to Asia, Europe and Western North America. Scientists differ on the number of species that can be distinguished, ranging from 25 to 40, although the current consensus is 33 known species. The relationships between the species need to be further clarified."
        }
    ]);

    const handleInputUserInfo = (userObject) => {
        setUserInformation(userObject);
    }

    const handleNewNote = (noteObject) => {
        setNotes([...notes, noteObject]);
    }

    const handleDeleteNote = (id) => {
        let currNotes = [...notes];
        currNotes.splice(id, 1);
        setNotes(currNotes);
    }

    return (
        <div>
            <h1>Notes Application</h1>
            <h1>User Information</h1>
            <NotesLoginComponent handleInputUserInfo={handleInputUserInfo} />
            <hr></hr>
            <h2>Welcome, {userInformation.userName} - {userInformation.userEmail}!</h2>
            <hr></hr>
            <NotesFormComponent handleAddNewNote={handleNewNote} />
            <hr></hr>
            {
                notes.map((dataNote, index) => (
                    <NoteListComponent key={index} id={index} {...dataNote}
                        handleDeleteNote={handleDeleteNote}
                    />
                ))
            }
        </div>
    );

}

export default NotesFunctionalComponent;