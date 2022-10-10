import React from "react";
import NoteCard from "./NoteCard";

function ListNotes({ notes, handleDeleteNote, handleArchived }) {
    if (notes.length === 0) return (<div className="list-notes">
        <p>Tidak ada catatan</p>
    </div>);
    return (<div className="list-notes">
        {notes.map((note) => <NoteCard key={note.id} {...note} handleDeleteNote={handleDeleteNote} handleArchived={handleArchived} />)}
    </div>);
}

export default ListNotes;