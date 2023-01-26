import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const UserInfoOrders = ({ userOrders }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(userOrders.length / productsPerPage);

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div class="table-responsive mb-3">
        <table class="table text-start align-middle table-bordered table-hover mb-0">
          <thead>
            <tr class="text-dark">
              <th scope="col">Serial</th>
              <th scope="col">Order ID</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userOrders
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item._id.substring(0, 10)}...</td>
                  <td>
                    <Link to={`/userorder/${item._id}`} className="linkReset">
                      <i class="fa-solid fa-eye text-dark"></i>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

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

export default UserInfoOrders;
