import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/core';
import { useField, fieldPropTypes, fieldDefaultProps } from '@formiz/core';
import TextInput from '@indeed/frontend-components-react-transpiled/dist/esm/TextInput';

// import { FormGroup } from '../FormGroup';

const propTypes = {
  label: PropTypes.node,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  helper: PropTypes.node,
  ...fieldPropTypes,
};
const defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  helper: '',
  ...fieldDefaultProps,
};

export const FieldInput = (props) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    resetKey,
    setValue,
    value,
  } = useField(props);
  const {
    label, type, required, placeholder, helper, ...otherProps
  } = props;
  const [isTouched, setIsTouched] = useState(false);
  const hasError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  // TODO: Something similar for the other form fields?
  // TODO: Technically, the form fields should probably be in a different package
  return (
    <Box mb="3">
      <TextInput
        errorText={hasError && errorMessage}
        hasError={hasError}
        helpText={helper}
        id={id}
        isRequired={isTouched && !!required}
        label={label}
        mb="3"
        name={id}
        onBlur={() => setIsTouched(true)}
        onChange={(e) => setValue(e.target.value)}
        type={type || 'text'}
        value={value}
      />
    </Box>
  );

  // const formGroupProps = {
  //   errorMessage, // use TextInput errorText instead
  //   helper,
  //   id,
  //   isRequired: !!required,
  //   label,
  //   showError,
  //   ...otherProps,
  // };

  // return (
  //   <FormGroup {...formGroupProps}>
  //     <Input
  //       key={resetKey}
  //       type={type || 'text'}
  //       id={id}
  //       value={value || ''}
  //       onChange={(e) => setValue(e.target.value)}
  //       onBlur={() => setIsTouched(true)}
  //       aria-invalid={showError}
  //       aria-describedby={!isValid ? `${id}-error` : null}
  //       placeholder={placeholder}
  //     />
  //   </FormGroup>
  // );
};

FieldInput.propTypes = propTypes;
FieldInput.defaultProps = defaultProps;
