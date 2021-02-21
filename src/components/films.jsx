import React from 'react';

const Films = ({films}) => {
    return ( 
        <div className="align_style">
            {films.results.map((film, index) =>(
                    <div key={index} className="card_style">
                        <p className="name_style">{film.title}</p>
                        <hr className="hr_ele_style" />
                        <div className="info_style">
                            <p>
                                <strong>Director: </strong>{film.director}
                            </p>
                            <p>
                                <strong>producer: </strong>{film.producer}
                            </p>
                            <p>
                                <strong>Created: </strong>{film.created}
                            </p>
                            <p>
                                <strong>Release Date: </strong>{film.release_date}
                            </p>
                        </div>
                    </div>
            ))}
        </div>
     );
}
 
export default Films;