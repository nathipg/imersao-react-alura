import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  const setProp = (prop, value) => {
    setValues({ ...values, [prop]: value });
  };

  const handlerFieldChange = (e) => {
    const { name, value } = e.target;
    setProp(
      name,
      value,
    );
  };

  const clearForm = () => {
    setValues({ ...values, ...valoresIniciais });
  };

  return {
    values,
    handlerFieldChange,
    clearForm,
  };
}

export default useForm;
