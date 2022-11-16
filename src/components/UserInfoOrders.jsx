import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const UserInfoOrders = ({ userOrders }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(userOrders.length / productsPerPage);

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      {userOrders
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((item) => (
          <h6 key={item._id}>
            Order no : {item._id.substring(0, 10)}{' '}
            <Link to={`/userorder/${item._id}`} className="linkReset">
              <i class="fa-solid fa-eye text-dark"></i>
            </Link>
          </h6>
        ))}

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

export default UserInfoOrders;
