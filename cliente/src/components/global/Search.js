import React, {useState} from 'react'

const Search = () => {

    const [search, setsearch] = useState('')
    console.log(search)

    return (
        <div className="search w-100 position-relative">
            <input type="text" className="form-control me-2 w-100 "
            value={search} placeholder="Enteryour search..."
            onChange={e => setsearch(e.target.value)}
            />
        </div>
    )
}

export default Search
