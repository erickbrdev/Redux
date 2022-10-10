const MODE_DARK = 'MODE-DARK';
const MODE_LIGHT = 'MODE-LIGHT';
const CHANGE_THEME = 'CHANGE_THEME';
const initialState = 'mode-light';

const btn = document.querySelector('.container-btn')
// console.log(btn)

btn.addEventListener('click', () => {
  const action = { type : CHANGE_THEME}
  store.dispatch(action)
})

const reducer = (state = initialState, action) => {
  switch(action.type){
    case MODE_LIGHT : 
      return 'mode-dark'

    case MODE_DARK:
      return 'mode-ligth'

    case CHANGE_THEME: 
      return state === 'mode-light ' ? 'mode-dark' : 'mode-light'
   
    default: 
      return state
  }
};

const store = Redux.createStore(reducer)

store.subscribe(() => {
  console.log(store.getState());
  const mainElement = document.querySelector('#container-mode') 
  mainElement.className = 'mode-dark';
})