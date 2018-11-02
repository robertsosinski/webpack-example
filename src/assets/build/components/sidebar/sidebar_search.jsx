import React from 'react';

export default class SidebarSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  handleSearch (event) {
    console.log(event);
    alert(`You've searched for "${this.state.searchValue}"`);
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSearch.bind(this)} className="sidebar-form" autoComplete="off">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." value={this.state.searchValue} onChange={e => this.setState({searchValue: e.target.value})} />
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
