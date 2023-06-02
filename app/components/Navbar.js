import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    // NavbarActions.getCharacterCount();

    // let socket = io.connect();

    // socket.on('onlineUsers', (data) => {
    //   NavbarActions.updateOnlineUsers(data);
    // });

    // $(document).ajaxStart(() => {
    //   NavbarActions.updateAjaxAnimation('fadeIn');
    // });

    // $(document).ajaxComplete(() => {
    //   setTimeout(() => {
    //     NavbarActions.updateAjaxAnimation('fadeOut');
    //   }, 750);
    // });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }


  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <b>Logo</b>
      </nav>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Navbar;