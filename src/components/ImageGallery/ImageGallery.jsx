import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import StyledImageGalleryList from './ImageGallery.styled';

export const ImageGallery = ({ pictures, click }) => {
  return (
    <StyledImageGalleryList>
      {pictures.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            id={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openPicture={() => click}
          />
        );
      })}
    </StyledImageGalleryList>
  );
};
