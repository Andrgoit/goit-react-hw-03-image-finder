import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
// import { ToastContainer } from 'react-toastify';
import SearchBar from './SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import LoadButton from './Button/Button';
import Container from './App.styled';
import { apiRequest } from '../services/api';

class App extends Component {
  state = {
    pictures: [],
    activeIndex: null,
    page: 1,
    showModal: false,
    name: null,
    loading: false,
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
      this.setState({ loading: true });
      apiRequest(nextName, nextPage)
        .then(res =>
          this.setState(prevState => {
            return { pictures: [...prevState.pictures, ...res.hits] };
          })
        )
        .finally(() => this.setState({ loading: false }));
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
    // console.log('нажатие на load more');
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { loading, pictures, showModal } = this.state;

    return (
      <div>
        {/* <ToastContainer /> */}
        {showModal && <Modal onClose={this.closeModal} />}
        <SearchBar onChangeValue={this.formSubmithandler} />

        {pictures && (
          <ImageGallery pictures={this.state.pictures}>
            <ImageGalleryItem />
          </ImageGallery>
        )}
        <Container>
          {loading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#3f51b5"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            pictures.length > 0 && (
              <LoadButton handlerClickButton={this.loadMoreButtonHandler} />
            )
          )}
        </Container>
      </div>
    );
  }
}
export { App };
