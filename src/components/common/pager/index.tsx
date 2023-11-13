import { FC } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './style.scss'

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pager: FC<Props> = ({ totalPages, currentPage, onPageChange }) => {

  return (
    <Pagination className='pagination'>
      <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} className="btn-page" />
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="btn-page" />
      <Pagination.Item className="btn-page" >{currentPage}</Pagination.Item>
      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="btn-page" />
      <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className="btn-page" />
    </Pagination>
  );
};

export { Pager };
