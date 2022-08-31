import React from "react";
import ListNotes from "./ListNotes";

function ContainerNotes({title, notes, handleDeleteNote, handleArchived}) {
    return <div className="container-notes">
        <h5>{title}</h5>
        <ListNotes notes={notes} handleDeleteNote={handleDeleteNote} handleArchived={handleArchived} />
    </div>
}

export default ContainerNotes;