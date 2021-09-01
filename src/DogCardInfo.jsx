import React from 'react';

export default ({ imgUrl, breed }) => {
    <div className="card dog-card">
        <div className="card-image">
            <figure className="image" style={{backgroundImage: `url(${imgUrl})`}}>
                <img src={imgUrl}  alt={`A ${breed} dog`} className='is-sr-only' />
            </figure>
        </div>
        <div className="card-content">
            <div className="content">
                <strong>Breed:</strong> {breed}
            </div>
        </div>
    </div>
}