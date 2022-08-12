import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import SearchBar from './SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import LoadButton from './Button/Button';
import { apiRequest } from '../services/api';

class App extends Component {
  state = {
    pictures: null,
    activeIndex: null,
    page: 1,
    showModal: false,
    name: null,
  };

  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=28166430-49d596e3415ce5cac11c6cb0f&image_type=photo&orientation=horizontal&per_page=12'
  //   );
  // }

  componentDidUpdate(_, prevState) {
    const prevName = prevState.name;
    const nextName = this.state.name;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevName !== nextName || prevPage !== nextPage) {
      apiRequest(nextName, nextPage).then(res =>
        this.setState({ pictures: res.hits })
      );
      // .then(data => this.setState({ pictures: data.hits }));
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  formSubmithandler = value => {
    this.setState({ name: value });
  };

  loadMoreButtonHandler = () => {
    console.log('нажатие на load more');
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div>
        {/* <ToastContainer /> */}
        {this.state.showModal && <Modal onClose={this.closeModal} />}

        <SearchBar onChangeValue={this.formSubmithandler} />
        {this.state.pictures && (
          <ImageGallery pictures={this.state.pictures}>
            <ImageGalleryItem />
          </ImageGallery>
        )}
        <LoadButton handlerClickButton={this.loadMoreButtonHandler} />
      </div>
    );
  }
}
export { App };
