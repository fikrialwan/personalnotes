import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNotes, changeTitle, submitNotes } from "../../redux/reducer/notes/notesSlice";
import Button from "../ui/Button";

function FormCard() {
    const data = useSelector((state) => state.notes.value);
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(submitNotes())
    }

    const handleChangeNote = (event) => {
        dispatch(changeNotes(event.target.value))
    }

    const handleChangeTitle = (event) => {
        dispatch(changeTitle(event.target.value))
    }

    return <div className="container-form-card">
        <div className="form-card">
            <form onSubmit={handleSubmit}>
                <h4>Buat Catatan</h4>
                <span>Sisa Karakter: {50 - data.title.length}</span>
                <input placeholder="ini adalah judul ...." value={data.title} onChange={handleChangeTitle} required />
                <textarea placeholder="Tuliskan catatanmu di sini" onChange={handleChangeNote} required value={data.note} />
                <Button backgroundColor="#1687A7" isSubmit={true}>Buat</Button>
            </form>
        </div>
    </div>
}

export default FormCard;