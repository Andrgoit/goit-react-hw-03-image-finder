import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import {
  StyledSearchInput,
  StyledSearchButton,
  StyledForm,
  StyledHeader,
} from 'components/SearchBar/SearchBar.styled';

class SearchBar extends Component {
  state = {
    value: '',
  };

  changeSearchValue = event => {
    // console.dir('16-event.target.value', event.target.value);
    this.setState({ value: event.target.value });
    // console.log('21-this.state.value', this.state.value);
  };

  resetForm() {
    this.setState({ value: '' });
  }

  handlerSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      return; //toast.error('wow');
    }
    this.props.onChangeValue(this.state.value);
    this.resetForm();
  };

  render() {
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handlerSubmit}>
          <StyledSearchButton type="submit">
            <FcSearch size="32px" />
          </StyledSearchButton>

          <StyledSearchInput
            onChange={this.changeSearchValue}
            type="text"
            name="search"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}

export default SearchBar;
