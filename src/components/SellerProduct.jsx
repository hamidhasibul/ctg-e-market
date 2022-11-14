import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const SellerProduct = ({ product }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 1;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = product
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((pro) => (
      <div class="card mx-2 mb-4 seller-info-card">
        <img
          src={pro.image}
          class="card-img-top card-image card-image-seller-ind"
          alt={pro.name}
        />

        <div class="card-body">
          <h5 class="card-title">
            <Link to={`../${pro.slug}`} className="product-link text-dark">
              {pro.name}
            </Link>
          </h5>
          <p class="card-text ">
            <span>{pro.category}</span>
            <br />
            <span>{pro.price} Taka</span>
            <br />
            <button className="btn btn-primary btn-sm mx-auto mt-3">
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(product.length / productsPerPage);

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="filter-cards">
        <div className="d-flex flex-wrap justify-content-center mb-4">
          {displayProducts}
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

export default SellerProduct;
