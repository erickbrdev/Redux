const CHANGE_THEME = 'CHANGE_THEME';
const initialState = 'mode-light';

const btn = document.querySelector('.container-btn')

btn.addEventListener('click', () => {
  const action = { type : CHANGE_THEME}
  store.dispatch(action)
})

const reducer = (state = initialState, action) => {
  switch(action.type){   
    case CHANGE_THEME: 
      if(state === 'mode-light') return 'mode-dark'   
      else return 'mode-light'
   
    default: 
      return state
  }
};

const store = Redux.createStore(reducer)

store.subscribe(() => {
  console.log(store.getState());
  const mainElement = document.querySelector('#container-mode') 
  mainElement.className = store.getState();
})