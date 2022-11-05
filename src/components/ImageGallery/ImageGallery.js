import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';

const ImageGallery = ({ onModalOpen, images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          openModal={onModalOpen}
        />
      ))}
    </ul>
  );
};

//********* */
// const ImageGallery = ({ onModalOpen, hits }) => {
//   //  largeImageURL, largeImageURL, alt
//   // img src={url} alt={alt} />
//   return (
//     <ul className="gallery">
//       {hits.map(hit => {
//         return (
//           <ImageGalleryItem hit={hit} key={hit.id} onModalOpen={onModalOpen} />
//         );
//       })}
//     </ul>
//   );
// };
//********* */
// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
// contacts: PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   })
// ),
// onDeleteContactItem: PropTypes.func.isRequired,
// };

export default ImageGallery;
