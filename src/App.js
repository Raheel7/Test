import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as AnimalActions from './Store/actions/actions'
import Helmet from 'react-helmet';





class App extends Component {


  state = {
    search: ''
  }




  componentDidMount() {

    this.props.onAnimalFetch()

  }

  updateSearch(event) {

    this.setState({
      search: event.target.value
    })
  }


  render() {

    // let animal=[...this.props.ani]    //coverting state into array
    // animal.map(aniKey=>{
    //   return (
    //   <ul>
    //     <li>{aniKey}</li>
    //   </ul>
    //   )
    // })

    const filteredSearch = this.props.ani.filter(

      (animal => {
        return animal.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      })
    )


    let animal = filteredSearch.map(animal => {
      return <li  key={animal}>{animal}</li>
    })


    return (

      <div className="App">

        <Helmet>
          <style>{'body { background-color: #3d3d4a; }'}</style>
        </Helmet>




        {this.props.err && <span >{this.props.err}</span>}

        <div className="box">
          <div className="container-1">
            <span className="icon"><i className="fa fa-search"></i></span>
            <input type="search"
              id="search"
              placeholder="...SearchAnimal"
              value={this.state.search}
              onChange={(event) => this.updateSearch(event)}

            />
          </div>
        </div>

        <ul >
          {animal}
        </ul>


      </div>

    );
  }
}


const mapStateToProps = state => {
  return {
    ani: state.Animals,
    err: state.error
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onAnimalFetch: () => dispatch(AnimalActions.FetchAnimal())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
