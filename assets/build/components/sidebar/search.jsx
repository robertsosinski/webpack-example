import React from 'react';

export default class Search extends React.Component {
  handleSearch (event) {
    console.log(event);
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSearch.bind(this)} className="sidebar-form" autoComplete="off">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
    );
  }
}
