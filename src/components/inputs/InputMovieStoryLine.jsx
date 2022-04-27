/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMovieStoryLine extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
        </label>
        <textarea
          className="form-control form-control-sm"
          value={ value }
          onChange={ onChange }
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          data-testid="storyline-input"
        />

      </div>
    );
  }
}
InputMovieStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputMovieStoryLine;
