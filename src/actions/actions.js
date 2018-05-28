import * as marvelApi from '../api/marvelApi';

export const SET_TEAM_NAME = 'SET_TEAM_NAME';
export const SELECT = 'SELECT';
export const SKIP = 'SKIP';
export const GET_CHARACTERS_REQUESTED = 'GET_CHARACTERS_REQUESTED';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE';

export function setTeamName(teamName) {
  return {
    type: SET_TEAM_NAME,
    payload: { teamName },
  };
}

export function select(character) {
  return {
    type: SELECT,
    payload: { character },
  };
}

export function skip(character) {
  return {
    type: SKIP,
    payload: { character },
  };
}

export function getCharacters() {

  return (dispatch) => {

    dispatch(getCharactersRequested())

    marvelApi.getMarvelCharacters().then((results) => {
      dispatch(getCharactersSuccess(results.data));
    }).catch((error) => {
      dispatch(getCharactersFailure(error));
    });

  };
}

export function getCharactersRequested() {
  return {
    type: GET_CHARACTERS_REQUESTED,
  };
}
 
export function getCharactersSuccess(characters) {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: { characters },
  };
}
 
export function getCharactersFailure(error) {
  return {
    type: GET_CHARACTERS_FAILURE,
    payload: { error },
  };
}


