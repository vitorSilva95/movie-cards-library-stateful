import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './inputs/Input';
import InputMovieStoryLine from './inputs/InputMovieStoryLine';
import Select from './inputs/Select';

const options = ['Ação', 'Comédia', 'Suspense'];
class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleState = this.handleState.bind(this);
    this.submitFunction = this.submitFunction.bind(this);
  }

  handleState = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

submitFunction = (state) => {
  const { onClick } = this.props;
  onClick(state);
  this.setState({
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  });
}

formsContainerTitleAndSubtitle = (title, subtitle) => (
  <div className="form-row">
    <div className="col">
      <Input
        label="Titulo"
        value={ title }
        className="form-control form-control-sm"
        name="title"
        data-testid="title-input"
        type="text"
        id="title"
        onChange={ this.handleState }
      />
    </div>
    <div className="col">
      <Input
        label="Subtitulo"
        className="form-control form-control-sm"
        name="subtitle"
        data-testid="subtitle-input"
        type="text"
        value={ subtitle }
        id="subtitle"
        onChange={ this.handleState }
      />
    </div>
  </div>
)

formsContainerImageAndGenreAndRating = (imagePath, rating, genre) => (
  <div className="form-row">
    <div className="col">
      <Input
        label="Imagem"
        className="form-control form-control-sm"
        data-testid="image-input"
        value={ imagePath }
        name="imagePath"
        type="text"
        id="imagePath"
        onchange={ this.handleState }
      />
    </div>
    <div className="form-group col-md-4">
      <Input
        label="Avaliação"
        className="form-control form-control-sm"
        name="rating"
        data-testid="rating-input"
        type="number"
        value={ rating }
        id="rating"
        onchange={ this.handleState }
      />
    </div>
    <div className="form-group col-md-4">
      <Input
        label="Avaliação"
        className="form-control form-control-sm"
        name="rating"
        data-testid="rating-input"
        type="number"
        value={ rating }
        id="rating"
        onchange={ this.handleState }
      />
    </div>
    <div className="col">
      <Select
        label="Gênero"
        array={ options }
        className="form-control form-control-sm"
        name="genre"
        value={ genre }
        onChange={ this.handleState }
      />
    </div>
  </div>
)

render() {
  const { subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  } = this.state;

  return (
    <form action="" data-testid="add-movie-form" div className="forms">
      {this.formsContainerTitleAndSubtitle(title, subtitle) }
      {this.formsContainerImageAndGenreAndRating(imagePath, rating, genre)}
      <InputMovieStoryLine
        value={ storyline }
        onChange={ this.handleState }
      />
      <button
        type="submit"
        data-testid="send-button"
        className="btn btn-primary"
        onClick={ () => this.submitFunction(this.state) }
      >
        Adicionar filme
      </button>

    </form>
  );
}
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
