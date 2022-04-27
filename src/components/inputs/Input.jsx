import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type,
      name, label,
      onChange, value, id, dataTestId, className, checked } = this.props;
    return (
      <>
        <label htmlFor={ id }>{ label }</label>
        <input
          className={ className }
          data-testid={ dataTestId }
          type={ type }
          name={ name }
          checked={ checked }
          value={ value }
          onChange={ onChange }
          id={ id }
        />
      </>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  checked: null,
  label: '',
  value: '',
  name: '',
  id: '',
  dataTestId: '',
  className: '',
  onChange: null,
};

export default Input;
