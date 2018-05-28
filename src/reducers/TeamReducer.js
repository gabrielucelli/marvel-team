import {
    SET_TEAM_NAME,
    SELECT,
} from '../actions/actions'
  
export default function TeamReducer(state = {teamName: '', characters: {}}, action) {

    switch(action.type) {
        case SET_TEAM_NAME:
            return {...state, teamName: action.payload.teamName};
        case SELECT:
            let character = action.payload.character;
            return {...state, characters: {...state.characters, [character.id] : character } }
        default:
            return state;
    }

}