import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';

import FilterProductInfo from './FilterProductInfo';

const FilterProduct = ({ products }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(products.length / productsPerPage);

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const userId = userInfo && userInfo._id;

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="filter-cards">
        <div className="d-flex flex-wrap justify-content-center mb-4">
          {products
            .filter((product) => {
              return product.sellerId !== userId;
            })
            .slice(pagesVisited, pagesVisited + productsPerPage)
            .map((product) => (
              <FilterProductInfo key={product._id} product={product} />
            ))}
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
      </div>
    </>
  );
};

export default FilterProduct;
