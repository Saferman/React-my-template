import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    // HomeActions.getTwoCharacters();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  // handleClick(character) {
  //   var winner = character.characterId;
  //   var loser = first(without(this.state.characters, findWhere(this.state.characters, { characterId: winner }))).characterId;
  //   HomeActions.vote(winner, loser);
  // }

  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Hello world</h3>
      </div>
    );
  }
}

export default Home;