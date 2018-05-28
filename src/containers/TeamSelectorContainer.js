import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as ActionCreators from '../actions/actions'
import SelectionCarousel from '../components/SelectionCarousel'

class TeamSelectorContainer extends Component {

  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
  }

  componentWillMount() {
    this.props.Actions.getCharacters()
  }

  render(){

    let { characters } = this.props;

    console.log('characters: ', characters);

    let activeCharacterId = characters && characters.items ? Object.keys(characters.items).pop() : null;

    return (

      <View style={styles.container}>

        { characters.isLoading &&
          <Text>Loading ...</Text>
        }

        { activeCharacterId &&
          <SelectionCarousel
            character={characters.items[activeCharacterId]}
            onSelect={this.handleSelect}
            onSkip={this.handleSkip}
          />
        }

      </View>

    )
  }

  handleSelect(id) {
    let { characters, Actions } = this.props;
    Actions.select(characters.items[id]);
  }

  handleSkip(id) {
    let { characters, Actions } = this.props;
    Actions.skip(characters.items[id]);
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#F0F3BD'
  }
})

function mapStateToProps(state) {
  return { characters: state.characters };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelectorContainer);
