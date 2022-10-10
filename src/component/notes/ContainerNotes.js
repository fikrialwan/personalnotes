import React from "react";
import ListNotes from "./ListNotes";

function ContainerNotes({ title, notes, handleArchived }) {
    return <div className="container-notes">
        <h5>{title}</h5>
        <ListNotes notes={notes} handleArchived={handleArchived} />
    </div>
}

export default ContainerNotes;