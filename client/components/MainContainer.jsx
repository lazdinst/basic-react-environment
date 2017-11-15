import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Divider } from 'semantic-ui-react';
import { getAPIData } from '../store/actions/app';
class MainContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <Container text style={{ marginTop: '4em' }} >
        This is the Main Container
      </Container>
    );
  }
}

const mapStateToProps = state => ({tasks: state.app.tasks});
const mapDispatchToProps = dispatch => bindActionCreators({getAPIData}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);