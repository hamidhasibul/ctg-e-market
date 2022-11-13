import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import ReactPaginate from 'react-paginate';

const SellFilterMain = ({ seller }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const sellersPerPage = 10;
  const pagesVisited = pageNumber * sellersPerPage;

  const displaySellers = seller
    .slice(pagesVisited, pagesVisited + sellersPerPage)
    .map((user) => (
      <div class="card mb-4 w-25 mx-2">
        <img
          src={user.image}
          class="card-img-top card-image-user"
          alt={user.name}
        />
        <div class="card-body">
          <h5 class="card-title">
            <Link
              to={`../seller/${user._id}`}
              className="product-link text-dark"
            >
              {user.name}
            </Link>
          </h5>
          <p class="card-text">
            <span>
              <button className="btn btn-success btn-sm">Follow</button>
            </span>
            <br />
            <span>Member Since : {user.createdAt.slice(0, 10)}</span>
            <br />
          </p>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(seller.length / sellersPerPage);

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="row">
        <div className="sellers-section d-flex flex-wrap justify-content-center">
          {displaySellers}
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
