import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import AddMovie from '../components/AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.addMovieCard = this.addMovieCard.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  componentDidMount() {
    this.saveLocalStorage();
    this.getLocalStorage();
  }

  onBookmarkedChange({ target: { checked, name } }) {
    const { movies } = this.props;
    let filteredMovies;
    if (checked) {
      filteredMovies = movies.filter(({ bookmarked }) => bookmarked === true);
    }
    this.setState({ [name]: checked, movies: filteredMovies || movies });
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    this.setState({ [name]: value });

    const filteredMovies = movies.filter(
      (movie) => movie.title.toLowerCase().includes(target.value)
      || movie.subtitle.toLowerCase().includes(target.value)
      || movie.storyline.toLowerCase().includes(target.value),
    );

    this.setState({
      movies: filteredMovies,
    });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    let filteredMovies;
    console.log(value);
    if (value !== 'all') {
      filteredMovies = movies.filter(({ genre }) => genre === value);
    }
    this.setState({ [name]: value, movies: filteredMovies || movies });
  }

  getLocalStorage() {
    const exists = localStorage.getItem('allMovies');
    if (exists) {
      this.setState({
        movies: JSON.parse(exists),
      });
    }
  }

  saveLocalStorage() {
    const exists = localStorage.getItem('allMovies');
    if (exists) {
      const data = JSON.parse(exists);
      localStorage.setItem('allMovies', JSON.stringify(data));
    }
  }

  addMovieCard(state) {
    this.getLocalStorage();
    const { movies } = this.state;
    localStorage.setItem('allMovies', JSON.stringify([...movies, state]));
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <hr />
        <h4 className="title-add-new-card">Formulário para adicionar um novo jogo</h4>
        <AddMovie onClick={ this.addMovieCard } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
export default MovieLibrary;
