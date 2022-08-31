import React from "react";
import Button from "./Button";

function FormCard({ title, handleChangeNotes, handleChangeTitle, note, onSubmit }){
    return <div className="container-form-card">
            <div className="form-card">
                <form onSubmit={onSubmit}>
                    <h4>Buat Catatan</h4>
                    <span>Sisa Karakter: {50 - title.length}</span>
                    <input placeholder="ini adalah judul ...." value={title} onChange={handleChangeTitle} required />
                    <textarea placeholder="Tuliskan catatanmu di sini" onChange={handleChangeNotes} required value={note} />
                    <Button backgroundColor="#1687A7" isSubmit={true}>Buat</Button>
                </form>
            </div>
        </div>
}

export default FormCard;