import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../login/actions/sessionAction';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div>home</div>
        <button className="btn btn-sm btn-primary" onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => bindActionCreators({
  logout
}, dispatch)

export default connect(
  null,
  mapDispatchToProp
)(Home);
