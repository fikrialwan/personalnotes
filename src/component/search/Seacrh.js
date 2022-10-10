import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/reducer/notes/notesSlice";

function Search() {
    const data = useSelector((state) => state.notes.value)
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(search(event.target.value))
    }

    return <input type="search" placeholder="Cari catatan ..." value={data.search} onChange={handleSearch} />
}

export default Search;