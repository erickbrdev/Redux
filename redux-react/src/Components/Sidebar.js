import React, { Component } from "react";
import { connect  } from "react-redux";

class Sidebar extends Component {

  selectAnime = (person) => {
    const { dispatch } = this.props
    const action = {
      type: 'SELECT_ANIME',
      payload: person
    };
    dispatch(action);
  }

  render() {    
    const { personagens } = this.props 
    return(
      <div className="container-sidebar">
        <fieldset className="animes-beetween">
          <legend>Animes</legend>
          {
            personagens.map((person, index) => (
              <div className="container-animes" key={index}> 
                <h3 className="name-personagem">{ person.personagem }</h3>
                <h4 className="objetive-personagem">{ person.objective }</h4>
                <button 
                  className="button-anime"
                  type="button"
                  onClick={() => this.selectAnime(person)}
                >
                  Ver trailler
                </button>
              </div>
            ))
          }
        </fieldset>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.reducerAnime
}

export default connect(mapStateToProps)(Sidebar)
