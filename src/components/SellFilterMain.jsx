import React from 'react';

import { useState } from 'react';

import SellFilterInfo from './SellFilterInfo';

import ReactPaginate from 'react-paginate';

const SellFilterMain = ({ seller }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const sellersPerPage = 10;
  const pagesVisited = pageNumber * sellersPerPage;

  const pageCount = Math.ceil(seller.length / sellersPerPage);

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const userId = userInfo && userInfo._id;

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="row">
        <div className="sellers-section d-flex flex-wrap justify-content-center">
          {seller
            .filter((seller) => {
              return seller._id !== userId;
            })
            .slice(pagesVisited, pagesVisited + sellersPerPage)
            .map((user) => (
              <SellFilterInfo key={user._id} user={user} />
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

export default SellFilterMain;
