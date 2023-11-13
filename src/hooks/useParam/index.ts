import { useState } from "react";

const useParam = () => {

  const [params, setParams] = useState({ title: "", page: '1' });

  const resultado = () => {
    setParams(prevState => ({ ...prevState }));
  };

  return {
    resultado,
    params,
    setParams
  };
};

export { useParam };