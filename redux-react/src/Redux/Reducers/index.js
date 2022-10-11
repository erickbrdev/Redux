import animes from "../../data";

const INITIAL_STATE = {
  personagens: animes,
  selectAnime: { },
}

const SELECT_ANIME = 'SELECT_ANIME'

function reducerAnime(state = INITIAL_STATE, action) {
  switch(action.type){
    case SELECT_ANIME: {
      return {
        selectAnime: action.payload,
        personagens: [...state.personagens],
      } ;
    }

    default:
      return state;
  }
}

export default reducerAnime;