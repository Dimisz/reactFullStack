const Filter = ({ searchTerm, handleSearchInput }) => {
  return(
    <p>filter shown with <input value={searchTerm} onChange={handleSearchInput} /> </p>
  );
}

export default Filter;