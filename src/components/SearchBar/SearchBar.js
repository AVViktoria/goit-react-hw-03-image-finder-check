import React, { Component } from 'react';
import { toast } from 'react-toastify';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  //*  прописываем  внутри инпута   //
  onFormChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };

  //*  слушатель событий по кнопке  //
  //*  trim() отрезает пробелы      //
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return toast.error('Enter search name, please');
    }

    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  //*  очищаем   сбрасываем   форму  //
  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    // console.log(this.state.images);
    const { searchQuery } = this.state;
    return (
      <div className="inputBox">
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onFormChange}
              value={searchQuery}
              name={searchQuery}
            />
            {/* {images.length > 0 ? <ImageGallery images={images} /> : null} */}
          </form>
        </header>
      </div>
    );
  }
}
export default SearchBar;
