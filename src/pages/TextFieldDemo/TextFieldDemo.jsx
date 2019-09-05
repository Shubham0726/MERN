import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const TextField = (props) => {
    const { value, error, disabled } = props;
    const errorStyle = props.error ? style.error : {};
    return (
      <>
        <input value={value} disabled={disabled} />
        {
            error && (
            <span className={{ ...errorStyle }}>{error}</span>
            )
        }

      </>
    )
}
TextField.propTypes = {
    value: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.string,
}
export default TextField;
