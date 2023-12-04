const SearchBar = ({ onChangeText }) => {
  return (
    <>
      <form>
        <label htmlFor="">Buscar </label>
        <input
          onChange={onChangeText}
          type="search"
          name="search"
          id="search"
          placeholder="Buscá tu libro..."
        />
      </form>
    </>
  );
};

export default SearchBar;