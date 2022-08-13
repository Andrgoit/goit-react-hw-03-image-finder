import React from 'react';
import { StyledButtonLoadMore } from 'components/Button/Button.styled';

const LoadButton = ({ handlerClickButton }) => {
  return (
    <StyledButtonLoadMore type="button" onClick={handlerClickButton}>
      Load more...
    </StyledButtonLoadMore>
  );
};

export default LoadButton;
