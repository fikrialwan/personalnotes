import React from "react";

function Search({ search, handleSearch }) {
    return <input type="search" placeholder="Cari catatan ..." value={search} onChange={handleSearch} />
}

export default Search;