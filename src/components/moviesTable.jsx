import React, { Component } from 'react';
import Like from './commons/like';
import Table from './commons/table';

class MoviesTable extends Component {

    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            path: '', label: 'Like', content: movie => (
                <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
            )
        },
        {
            path: '', label: 'Actions', content: movie => (
                <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
            )
        }
    ]

    render() {
        const { movies,  onSort, sortColumn } = this.props;
        return (
            <Table 
            columns = {this.columns} 
            data={movies} 
            sortColumn={sortColumn} 
            onSort={onSort} />
        )
    }
}

export default MoviesTable;