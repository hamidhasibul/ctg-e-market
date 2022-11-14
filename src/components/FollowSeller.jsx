import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import FollowSellerInfo from './FollowSellerInfo';

const FollowSeller = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const navigate = useNavigate();

  const {
    wish: { wishItems },
  } = state;

  const [pageNumber, setPageNumber] = useState(0);
  const sellersPerPage = 5;
  const pagesVisited = pageNumber * sellersPerPage;

  const pageCount = Math.ceil(wishItems.length / sellersPerPage);

  const handlerPageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (!localStorage.getItem('userInfo')) {
      localStorage.getItem('userInfo');
      navigate('/');
    }
  });

  return (
    <>
      <div className="container-lg">
        <div className="row my-4">
          <div className="col-lg-12">
            <h3 className="text-center">Followed List</h3>

            {wishItems.length === 0 ? (
              <h3 className="text-center">
                You are not following any sellers at this time.
              </h3>
            ) : (
              <div className="follow-seller-list d-flex justify-content-center mt-4">
                {wishItems
                  .slice(pagesVisited, pagesVisited + sellersPerPage)
                  .map((item) => (
                    <FollowSellerInfo key={item._id} item={item} />
                  ))}
              </div>
            )}

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
        </div>
      </div>
    </>
  );
};

export default FollowSeller;
