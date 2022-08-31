import React from "react";
import NoteCardAction from "./NoteCardAction";
import { showFormattedDate } from "./utils";

function NoteCard({ id, title, body, archived, createdAt, handleDeleteNote, handleArchived }) {
    // const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    // let date = new Date(createdAt)
    return <div className="note-card">
        <h5>{title}</h5>
        {/* <span>{`${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`}</span> */}
        <span>{showFormattedDate(createdAt)}</span>
        <p>{body}</p>
        <NoteCardAction archived={archived} handleDeleteNote={() => handleDeleteNote(id)} handleArchived={() => handleArchived(id)} />
    </div>
}

export default NoteCard;