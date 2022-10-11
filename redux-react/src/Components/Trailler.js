import React, { Component } from "react";
import { connect  } from "react-redux";

class Trailler extends Component {
  render(){     
    return(
      <div className="container-trailler">
        <fieldset >
          <lengend className='trailler-text'>Trailler</lengend>
          <h3>{ this.props.selectAnime.personagem }</h3>
        </fieldset>
        <iframe
          className="trailler-space"
          title="Trailler"
          width="800px"          
          src={this.props.selectAnime.trailler}
        >
        </iframe>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.reducerAnime
}

export default connect(mapStateToProps)(Trailler)