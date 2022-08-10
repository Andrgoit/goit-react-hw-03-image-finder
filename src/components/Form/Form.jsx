import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import {
  StyledSearchInput,
  StyledSearchButton,
  StyledForm,
} from 'components/Form/Form.styled';

class Form extends Component {
  state = {};

  render() {
    return (
      <StyledForm>
        <StyledSearchButton type="submit">
          <FcSearch size="32px" />
        </StyledSearchButton>

        <StyledSearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    );
  }
}

export default Form;
