import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
    position: relative;

    textarea {
        min-height: 150px;
    }

    input[type="color"] {
        padding-left: 56px;
    }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background-color: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px sold #53585D;

  padding: 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
      border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);
    }
  `}
`;

function FormField({
  as, label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          id={fieldId}
          as={as}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
          autocomplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  as: 'input',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
