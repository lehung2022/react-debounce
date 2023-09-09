import PropTypes from "prop-types";

const SearchInput = ({ searchValue, setSearchValue }) => {

    SearchInput.propTypes = {
        searchValue: PropTypes.string.isRequired,
        setSearchValue: PropTypes.string.isRequired
    }


    return (
        <input
            className="search-input"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            autoFocus
        />
    )
}
export default SearchInput;