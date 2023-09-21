import { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Here, you could implement your search logic.
        // For this example, we'll just set the search term as a result.
        setSearchResults([searchTerm, ...searchResults]);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div id="searchResults">
                {searchResults.map((result, index) => (
                    <div key={index} className="search-result">
                        {result}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
