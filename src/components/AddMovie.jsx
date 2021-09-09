import React, { Component } from 'react';

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
  }

  handleState = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre
    } = this.state;

    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            value={ title }
            id="title"
            onChange={ this.handleState }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            id="subtitle"
            onChange={ this.handleState }
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            id="imagePath"
            onChange={ this.handleState }
          />
        </label>
      </form>
    );
  }
}
export default AddMovie;
