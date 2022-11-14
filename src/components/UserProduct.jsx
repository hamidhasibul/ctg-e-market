import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import ProductItem from './ProductItem';

const UserProduct = ({ product }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(product.length / productsPerPage);

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="d-flex flex-wrap  mb-4">
        {product
          .slice(pagesVisited, pagesVisited + productsPerPage)
          .map((pro) => (
            <ProductItem pro={pro} />
          ))}{' '}
      </div>
      {/* Pagination */}
      <ReactPaginate
        className="pagination d-flex justify-content-center"
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlerPageClick}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'active'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        disabledClassName={'disabled'}
      />
    </>
  );
};

export default UserProduct;
