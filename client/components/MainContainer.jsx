import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Divider } from 'semantic-ui-react';

function MainContainer() {
  return (
    <Container text style={{ marginTop: '4em' }} >
      This is the Main Container
    </Container>
  );
}

export default MainContainer;