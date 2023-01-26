import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Orders = ({ orders }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(orders.length / productsPerPage);

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      {orders
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((order) => (
          <h6 key={order._id}>
            Order no : {order._id.substring(0, 10)}{" "}
            <Link to={`/order/${order._id}`} className="linkReset">
              <i class="fa-solid fa-eye text-dark"></i>
            </Link>
          </h6>
        ))}

      <ReactPaginate
        className="pagination d-flex justify-content-center"
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlerPageClick}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeClassName={"active"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        disabledClassName={"disabled"}
      />
    </>
  );
};

export default Orders;
