import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toArchived, toNotArchived } from "../../redux/reducer/notes/notesSlice";
import ContainerNotes from "../notes/ContainerNotes";
import Search from "./../search/Seacrh";

function Content() {
    const data = useSelector((state) => state.notes.value);
    const dispatch = useDispatch()

    const notes = data.notes.filter((note) => note.title.toLowerCase().search(data.search.toLowerCase()) !== -1)

    return <div className="container-content">
        <Search />
        <ContainerNotes
            title="Catatan Aktif"
            notes={notes.filter((note) => !note.archived)}
            handleArchived={(id) => dispatch(toArchived(id))}
        />
        <ContainerNotes
            title="Arsip"
            notes={notes.filter((note) => note.archived)}
            handleArchived={(id) => dispatch(toNotArchived(id))}
        />
    </div>
}

export default Content;