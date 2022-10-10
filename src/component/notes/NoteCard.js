import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/reducer/notes/notesSlice";
import { showFormattedDate } from "../../utils";
import NoteCardAction from "./NoteCardAction";

function NoteCard({ id, title, body, archived, createdAt, handleArchived }) {
    const dispatch = useDispatch();

    return <div className="note-card">
        <h5>{title}</h5>
        <span>{showFormattedDate(createdAt)}</span>
        <p>{body}</p>
        <NoteCardAction archived={archived} handleDeleteNote={() => dispatch(deleteNote(id))} handleArchived={() => handleArchived(id)} />
    </div>
}

export default NoteCard;