/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './inputs/Select';
import Input from './inputs/Input';

const options = ['all', 'action', 'comedy', 'thriller'];
class SearchBar extends Component {
  formsContainer = () => {
    const { searchText,
      onSearchTextChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div className="form-row">
        <div className="col">
          <Input
            label="Inclui o texto"
            name="searchText"
            className="form-control form-control-sm"
            id="texto"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </div>
        <div className="col">
          <Select
            label="Genero"
            name="selectedGenre"
            id="select"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            className="form-control form-control-sm"
            array={ options }
          />
        </div>
      </div>
    );
  };

  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <form data-testid="search-bar-form" className="forms-filter">
        { this.formsContainer() }
        <div className="form-check">
          <Input
            name="bookmarkedOnly"
            type="checkbox"
            id="checkBox"
            className="form-check-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          <label htmlFor="checkBox" className="form-check-label">Filtrar Favoritos</label>
        </div>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
