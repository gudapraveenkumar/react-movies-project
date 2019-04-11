import React from 'react';
import _ from 'lodash'; // optimise version of javascript library undrscore
import PropTypes from 'prop-types';

const Pagination = (props) => {

    const { itemsCount, pageSize, onPageChange, currentPage } = props;
   
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (

        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                        <span className="page-link" onClick={() => onPageChange(page)}>{page}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination;