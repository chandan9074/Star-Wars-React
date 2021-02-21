import React from 'react';
import Characters from './characters.jsx';
import Films from './films.jsx';
import Starships from './starships.jsx';
import Species from './species.jsx';


const ControlAllElement = ({peoples, showCharacter, films, showFilms, starships, showStarships, species, showSpecies, hendleShowFilms, hendleShowCharacter, hendleShowStarships, hendleShowSpecies}) => {
    return ( 
        
        <div>
            <div className="nev_style">
                <button className="button_style"  onClick={hendleShowCharacter}>Peoples</button>
                <button className="button_style" style={{marginLeft:"10vh"}} onClick={hendleShowFilms}>Films</button>
                <button className="button_style" style={{marginLeft:"10vh"}} onClick={hendleShowStarships}>Starships</button>
                <button className="button_style" style={{marginLeft:"10vh"}} onClick={hendleShowSpecies}>Species</button>
            </div>

            <hr className="hr_style"/>
            <div>
                {showCharacter ?
                 (<Characters peoples={peoples}/>)
                : (showFilms ? <Films films={films} />
                :(showStarships ? <Starships starships={starships} />
                :(showSpecies ? <Species species={species} />:null)))}
            </div>
        </div>
     );
}
 
export default ControlAllElement;