import React, { Component } from 'react';
import { StyledHeader } from 'components/App.styled';
import Form from './Form/Form';

class App extends Component {
  state = {};

  render() {
    return (
      <StyledHeader>
        <Form />
      </StyledHeader>
    );
  }
}
export { App };
