import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  as, label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const Tag = as;

  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
        <Tag
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  as: 'input',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
