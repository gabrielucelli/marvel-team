import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import PropTypes from 'prop-types';

import Character from './Character';

class SelectionCarousel extends Component {

    render() {

        let { character, onSelect, onSkip } = this.props;

        return (
            <View style={styles.container}>
              <View style={styles.characterContainer}>
                <Character characterThumbnail={character.thumbnail} name={character.name} />
              </View>
              <View style={styles.buttonContainer}>
                <Button onPress={() => onSkip(character.id)} style={styles.skipButton}>
                    Skip
                </Button>
                <Button onPress={() => onSelect(character.id)} style={styles.selectButton}>
                    Select
                </Button>
              </View>
            </View>
        )

    }


}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  characterContainer:{
    flex: 8,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  skipButton: {
    borderColor: 'grey',
    borderWidth: 1,
    color: 'grey',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 60,
    fontSize: 17,
    letterSpacing: 3
  },
  selectButton: {
    backgroundColor: 'green',
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 45,
    paddingRight: 45,
    marginTop: 60,
    fontSize: 17,
    letterSpacing: 3
  }
})

SelectionCarousel.propTypes = {
    character: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    onSkip: PropTypes.func.isRequired
}
  
export default SelectionCarousel;
  