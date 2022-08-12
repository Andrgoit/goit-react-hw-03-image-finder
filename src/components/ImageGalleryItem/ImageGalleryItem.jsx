import React from 'react';
import {
  StyledImageGalleryItem,
  StyledImageGalleryImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  largeImageURL,
  openPicture,
}) => {
  return (
    <StyledImageGalleryItem key={id} onClick={() => openPicture(largeImageURL)}>
      <StyledImageGalleryImg src={webformatURL} alt={tags} />
    </StyledImageGalleryItem>
  );
};
