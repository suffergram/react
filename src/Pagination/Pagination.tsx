import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../Types/RootState';
import { handleOffsetAction } from '../state/reducerActions';
import './style.css';

export default function Pagination() {
  const dispatch = useDispatch();

  const stateMoviesTotalAmount = useSelector(
    (state: RootState) => state.movieState.totalAmount
  );

  const pageCount = Math.ceil(stateMoviesTotalAmount / 9);

  return (
    <div className="pagination">
      <ReactPaginate
        className="pagination-container"
        pageCount={pageCount}
        breakLabel="..."
        onPageChange={({ selected }) => {
          dispatch(handleOffsetAction(selected)); // TODO: fix this 'selected' variable
        }}
        pageRangeDisplayed={4}
        previousLabel="<<"
        nextLabel=">>"
        renderOnZeroPageCount={null}
        breakClassName="pagination-item"
        pageLinkClassName="pagination-item"
        previousLinkClassName="pagination-item"
        nextLinkClassName="pagination-item"
      />
    </div>
  );
}