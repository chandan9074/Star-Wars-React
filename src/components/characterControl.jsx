import React, {useState} from 'react';
import Spinner from './spinner.jsx';
import ControlAllElement from './controlAllElement.jsx'

const CharacterControl = ({peoples, isLoading, showCharacter, films, showFilms, starships, showStarships, species, showSpecies, f_hendleShowFilms, f_hendleShowCharacter, f_hendleShowStarships, f_hendleShowSpecies}) => {

    return ( 
        <div>
            {isLoading ? (<Spinner/>):<ControlAllElement 
            showCharacter={showCharacter} 
            peoples={peoples}
            films={films}
            showFilms={showFilms} 
            starships={starships}
            showStarships={showStarships}
            species={species}
            showSpecies={showSpecies}
            hendleShowFilms={f_hendleShowFilms}
            hendleShowCharacter={f_hendleShowCharacter}
            hendleShowStarships={f_hendleShowStarships}
            hendleShowSpecies={f_hendleShowSpecies}
            
            />}
        </div>
     );
}
 
export default CharacterControl;