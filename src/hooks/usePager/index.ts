import { useState } from "react";

const usePagination = () => {
  const [totalPages, setTotalPages] = useState("");
  const [page, setPage] = useState('');
  const [params, setParams] = useState({ page: 1 });

  const handleFirst = (page: number | null) => {
    let calc = Number(page) + 1;
    setParams(prevState => ({...prevState, page : 1}));
  };

  const handleNext = (page: number | null) => {
    let calc = Number(page) + 1;
    setParams(prevState => ({...prevState, page : calc}));
  };

  const handlePrev = (page: number | null) => {
    let calc = Number(page) - 1;
    setParams(prevState => ({...prevState, page : calc}));
  };

  const handleLast = (totalPages: number) => {
    let calc = Number(totalPages);
    setParams(prevState => ({...prevState, page : calc}))
  };

  return {
    handleFirst,
    handlePrev,
    handleNext,
    handleLast,
    totalPages,
    setTotalPages,
    page,
    setPage,
    params,
    setParams
  };
};

export { usePagination };