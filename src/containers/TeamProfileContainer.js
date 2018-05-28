import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actions';
import CharacterList from '../components/CharacterList';

class TeamProfileContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let {team} = this.props;

    return(
      <View style={styles.container}>
        <Text>{team.teamName}</Text>
        <CharacterList characters={team.characters} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  text:{
    color:'red'
  }
})

function mapStateToProps(state) {
  return { team: state.team };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfileContainer);
