import React from "react";
import ContainerNotes from "../notes/ContainerNotes";
import Search from "./../search/Seacrh";

function Content({ handleSearch, search, notes, handleDeleteNote, handleToArchived, handleToNotArchived, }) {
    return <div className="container-content">
        <Search search={search} handleSearch={handleSearch} />
        <ContainerNotes
            title="Catatan Aktif"
            notes={notes.filter((note) => !note.archived)}
            handleDeleteNote={handleDeleteNote}
            handleArchived={handleToArchived}
        />
        <ContainerNotes
            title="Arsip"
            notes={notes.filter((note) => note.archived)}
            handleDeleteNote={handleDeleteNote}
            handleArchived={handleToNotArchived}
        />
    </div>
}

export default Content;