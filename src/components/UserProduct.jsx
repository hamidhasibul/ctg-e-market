import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const UserProduct = ({ product }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 1;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = product
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((pro) => (
      <div class="card mx-2 mb-4 my-product-card" key={pro._id}>
        <img
          src={pro.image}
          class="card-img-top my-product-card-image"
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
            <button className="btn btn-success btn-sm mx-auto mt-3 w-50">
              Edit
            </button>
            <button className="btn btn-danger btn-sm mx-auto mt-3 w-50">
              Delete
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
      <div className="d-flex flex-wrap  mb-4">{displayProducts}</div>
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
