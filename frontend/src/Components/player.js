import React from 'react'
import { Link, withRouter } from 'react-router-dom';


export default withRouter(function Player(props) {
    const {player} = props;

    const url = "/player/"+player._id;
    const addtocartHandler = () => {
        props.history.push(`/favourites/${player._id}?point=1`);
    }
    return (
        <div>
            <div className="card mb-2">
                <div className="card-body">
                <h5>{player.username}</h5>
                <div className="card-subtitle">Specifications</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Level : {player.level}</li>
                    <li className="list-group-item">STR : {player.str}</li>
                    <li className="list-group-item">DEF : {player.def}</li>
                 </ul>
                 <button onClick={addtocartHandler} className="btn btn-primary">Add to Favourites</button>
                 <Link to={url} className="btn btn-primary ml-4">See more...</Link>
                </div>
            </div>
          
         
        
        </div>
    )
})
