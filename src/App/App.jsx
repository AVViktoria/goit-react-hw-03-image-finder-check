import React, { Component } from 'react';
import { ToastContainer, toast} from 'react-toastify';

//*      Libraries      //

//*      Components      //
import SearchBar from 'components/SearchBar';
import Modal from 'components/Modal';
import ImageGallery from 'components/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import LoadButton from 'components/Button';
// import fetchImages from '../components/Service'
import api from '../Service/FetchApi'

//* status   //
// 'idle'
// 'pending'
// 'resolved'
// 'rejected'


//*      Root      //
class App extends Component {
  state = {
    searchQuery: "",
    page: 0,
    status: "idle",
    error: null,
    images: [],
    modalOpen: false,
    largeImg: "",
    loading: false,
    totalHits: 0,
  };
  //   componentDidMount() {
  //     this.setState({ loading: true });
  // if (
  //       prevProps.searchQuery !== this.props.searchQuery ||
  //       prevState.page !== this.state.page
  //      ) {
  //        this.fetchImages()
  //     .catch(error => this.setState({ error }))
  //         .finally(() => this.setState({ loader: false }));
  //     }

  // }

  //     this.setState({ query: params.get('query') });
  //   }  
  
  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPageNumber = prevState.page;
    const nextPageNumber = this.state.page;
    if (
      prevQuery !== nextQuery ||
      prevPageNumber !== nextPageNumber
    ) {
      api
        .fetchImages(nextQuery, nextPageNumber)
        .then(images => {
          this.setState(prevState => ({
            images:
              nextPageNumber === 1
              ? [...images]
              :[...prevState.images, ...images],
          }))
        }).finally(() => {
      this.setState({loading: false})
    })
  }
  }
          //*********** */
  //       {
  //         if (nextPageNumber === 1) {
  //           if (res.hits.length === 0) {
  //             toast.error('No pictures, sorry. Enter another name, please!');
  //             this.setState({ images: [], status: "idle" });
  //             //  return;
  //           } else {
  //             toast.success(`We found ${res.total} picture`)
        
  //             this.setState({ images: res.hits, status: "resolved" });
  //             if (this.state.images.length === res.total) {
  //               this.setState({ status: "endOfList" });
  //             }
  //           }
  //         }
  //         if (nextPageNumber > 1) {
  //           this.setState(() => ({
  //             images: [...prevImages, ...res.hits],
  //             status: "resolved",
  //           }));
  //           if (this.state.images.length === res.total) {
  //             toast.info("End of list,sorry!");
  //             this.setState({ status: "endOfList" });
  //           }
  //         }
  //       })
  //       .catch((error) => {
  //         this.setState({ error, status: "rejected" });
  //       });
  //   }
  // }
        //*********** */


    //*   load next 12 pictures, next page  //
   onLoadMore = () => {
    // this.setState(({ page }) => ({ page: page + 1 }));
     this.setState(state => ({ page: state.page + 1 }));
   };

  //*  on search submit searchQuery  //
  //*  trim() отрезает пробелы      /
  handleFormSubmit = searchQuery => {
     if (searchQuery.trim() === '') {
      return toast.error('Enter correct name, please!')
    } else if (searchQuery === this.state.searchQuery) {
      return;
    }
    this.setState({
      searchQuery: searchQuery,
      page: 1,
      images: [],
    });
  };

  //*  open and close modal window  //
  toggleModal = largeImg => {
    if (!largeImg) {
      this.setState({ largeImg: '', modalOpen: false });
      return;
    }
    this.setState({ largeImg, modalOpen: true });
  };
  // onModalOpen = (event) => {
  //   this.setState({
  //     modalOpen: true,
  //     largeImg: event.target.dataset.large,
  //     // largeImage: images[event].largeImageURL,
  //   });
  // };
  // onModalClose = () => {
  //   this.setState({
  //     modalOpen: false,
  //     largeImg: "",
  //   }); 
    
  // };
  //*                                  //
  // //*  что бы при постоянном нажатии не перерендывался компонент  //
  // shouldComponentUpdate (nextProps, nextState) {
  //  return  this.setState.activeTabIdx !== this.state.activeTabIdx;
  // };

  

  render() {
  const { onLoadMore, toggleModal, handleFormSubmit } = this;
  const { images,  largeImg, modalOpen,  loading, totalHits } = this.state;
    return (
      <>
       
        <SearchBar onSubmit={handleFormSubmit} />
        {loading && <Loader />}
        <ImageGallery images={images} openModal={toggleModal} />
        {!!totalHits && (
          <LoadButton onLoadMore={onLoadMore} />
        )}
        {modalOpen && (
          <Modal
            modalImage={largeImg}
            closeModal={toggleModal}
          />
        )}
        
        
        
        
        {/* <SearchBar onSubmit={handleFormSubmit} /> */}
{/* 
         {status === "pending" && <Loader />}
        {status === "resolved" && (
          <>
            <ImageGallery
              onModalOpen={onModalOpen}
              images={images}
            />
            <LoadButton onLoadMore={onLoadMore} />
            {modalOpen && (
              <Modal closeModal={onModalClose} link={largeImg} />
            )}
          </>)} 
        
         {status === "endOfList" && (
          <>
            <ImageGallery
              onModalOpen={onModalOpen}
              hits={images}
            />
            {modalOpen && (
              <Modal closeModal={onModalClose} link={largeImg} />
            )}
          </>
        )}
         {status === "rejected" && (
          toast.error('No found, try again!') 
        )} */}

        {/* {images.length !== 0 && (
          <ImageGallery images={images} onModalOpen={onModalOpen} />
        )}

         {modalOpen && (
          <Modal onModalClose={onModalClose} largeImg={largeImg} />
        )}


        {loading && <Loader />}
         {images.length >= 12 && <LoadButton onLoadMore={onLoadMore} />} */}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
//  toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//  };
//   hideLoaderInModal = () => this.setState({ loader: false });
  
// onSubmit = e => {
//     e.preventDefault();
//     this.setState({
//       page: 1,
//       articles: [],
//       search: e.target[1].value,
//       loading: true,
//     });
// };//*     //
  //onImgClick
    // //*  слушатель событий по кнопке  //
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.reset();
  // onSubmit = searchData => {
  //   if (searchData.trim() === '') {
  //     return toast.error('Enter the meaning for search');
  //   } else if (searchData === this.state.searchData) {
  //     return;
  //   }
  //   this.setState({
  //     searchData: searchData,
  //     page: 1,
  //     images: [],
  //   });
  // };
  // };
  // //*  очищаем   сбрасываем   форму  //
  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };