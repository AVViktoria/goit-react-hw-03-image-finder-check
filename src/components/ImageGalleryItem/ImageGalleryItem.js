import React from 'react';

const ImageGalleryItem = ({ largeImageURL, webformatURL, openModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};
////*********** */
// const ImageGalleryItem = ({ hit, onModalOpen }) => {
//   return (
//     <li className="gallery-item">
//       <img
//         className="galleryItemImg"
//         onClick={onModalOpen}
//         data-large={hit.largeImageURL}
//         src={hit.previewURL}
//         alt={hit.tags}
//       />
//     </li>
//   );
// };
////*********** */
export default ImageGalleryItem;
