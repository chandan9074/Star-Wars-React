import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import CharacterControl from './components/characterControl.jsx'


class App extends Component {
  state = { 
    peoples:[],
    films:[],
    starships:[],
    species:[],
    isLoading:true, 
    showCharacter: false,
    showFilms: false,
    showStarships: false,
    showSpecies:false,
   }
  
  hendleShowCharacter=()=>{
    this.setState({showCharacter:true})
    this.setState({showFilms:false})
    this.setState({showStarships:false})
    this.setState({showSpecies:false})
  }

  hendleShowFilms=()=>{
    this.setState({showFilms: true})
    this.setState({showCharacter:false})
    this.setState({showStarships:false})
    this.setState({showSpecies:false})
  }

  hendleShowStarships=()=>{
    this.setState({showStarships:true})
    this.setState({showCharacter:false})
    this.setState({showFilms:false})
    this.setState({showSpecies:false})
  }

  hendleShowSpecies=()=>{
    this.setState({showSpecies:true})
    this.setState({showCharacter:false})
    this.setState({showFilms:false})
    this.setState({showStarships:false})
  }
  
  componentDidMount() {

          axios.get('https://swapi.dev/api/people/?format=json').then(res => {
           this.setState({peoples:res.data})
           this.setState({showCharacter:true})
          })

          axios.get('https://swapi.dev/api/films/?format=json').then(res =>{
            this.setState({films:res.data})
          })

          axios.get('https://swapi.dev/api/starships/?format=json').then(res =>{
            this.setState({starships:res.data})
          })

          axios.get('https://swapi.dev/api/species/?format=json').then(res =>{
            this.setState({species:res.data})
            this.setState({isLoading:false})
          })

    }
  render() { 

    return ( 
        <div className="App">
          <CharacterControl
           isLoading={this.state.isLoading} 
           showCharacter={this.state.showCharacter} 
           peoples={this.state.peoples}
           films={this.state.films}
           showFilms={this.state.showFilms} 
           starships={this.state.starships}
           showStarships={this.state.showStarships}
           species={this.state.species}
           showSpecies={this.state.showSpecies}
           f_hendleShowFilms={this.hendleShowFilms}
           f_hendleShowCharacter={this.hendleShowCharacter}
           f_hendleShowStarships={this.hendleShowStarships}
           f_hendleShowSpecies={this.hendleShowSpecies}
           />
        </div>
     );
  }
}
 
export default App;