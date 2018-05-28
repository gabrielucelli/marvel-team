import {
    SKIP,
    SELECT,
    GET_CHARACTERS_REQUESTED,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAILURE
} from '../actions/actions';
    
export default function CharactersReducer(state = {items: {}, isLoading: false, error: null}, action) {
      
    console.log('CharactersReduce ');
        
    switch(action.type) {

        case GET_CHARACTERS_REQUESTED:
            return {...state, isLoading : true}

        case GET_CHARACTERS_SUCCESS:

            console.log('action.payload: ', action.payload);
            
            return {
                ...state,
                isLoading: false,
                items: convertMarvelResponse(action.payload.characters)
            };

        case SKIP:
        case SELECT:

            let filteredItems = state.items;
            delete filteredItems[action.payload.character.id];
    
            return {
                ...state,
                isLoading: false,
                items: {...filteredItems}
            };
    
        case GET_CHARACTERS_FAILURE:
            return {...state, isLoading: false, error: action.payload.error};
    
        default:
            return state;
    }
  
}
  
  
function convertMarvelResponse(characters){

    let normalizedObj = {};
  
    characters.results.forEach((character) => {
      let formattedUri = character.thumbnail.path + '/portrait_fantastic' + '.' + character.thumbnail.extension
      formattedUri = formattedUri.replace('http', 'https')
      normalizedObj[character.id] = {id: character.id, thumbnail: formattedUri, name: character.name};
    });
  
    return normalizedObj;
  
}
  