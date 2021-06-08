import React from 'react';

const Search = (props) => {

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        props.handleSearch(e)
    }

    return(
        <div>
            <label htmlFor="search"> Search: </label>
            <input id="search" type="text" onChange={handleChange}/>

            <p>
                Searching for <strong>{searchTerm}</strong>
            </p>
        </div>
    )

}

export default Search;