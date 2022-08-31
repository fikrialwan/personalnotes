import React from "react";
import Button from "./Button";

function NoteCardAction({ archived, handleDeleteNote, handleArchived }) {
    if (archived) {
        return <div className="note-card-action">
            <Button onclick={handleDeleteNote} backgroundColor="red">Hapus</Button>
            <Button onclick={handleArchived} backgroundColor="#1687A7">Pindahkan</Button>
        </div>
    } else {
        return <div className="note-card-action">
            <Button onclick={handleDeleteNote} backgroundColor="red">Hapus</Button>
            <Button onclick={handleArchived} backgroundColor="#1687A7">Arsipkan</Button>
        </div>
    }
}

export default NoteCardAction;