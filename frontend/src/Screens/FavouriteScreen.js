import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavouritePlayer, removeFavouritePlayer } from '../actions/cartActions';

export default function FavouriteScreen(props) {
    const dispatch = useDispatch();
    const playerId = props.match.params.id;
    const point = props.location.search? Number(props.location.search.split("=")[1]) : 1;
    const favourites = useSelector(state => state.favourites);
    const {favouritePlayers} = favourites;

    useEffect(() => {
        if(playerId){
            dispatch(addFavouritePlayer(playerId,point));
        }
    }, [dispatch,playerId,point])
    const removeFromCartHandler = (id) => {
        dispatch(removeFavouritePlayer(id));
    }

    return (
        <div>
      
            
            <h3>Favourite Players</h3>
            {favouritePlayers.length === 0 ? (<h4>Empty, you can add favourite players</h4>) : 
            favouritePlayers.map(x => (
                <ul key={x.id}>
                   <li key={x.id}> Username : {x.username}</li>
                   <li key={x.id}> Point : {x.point}</li>
                   <li key={x.id}> <select key={x.id} value={x.point} onChange={(e) => dispatch(addFavouritePlayer(x.id,Number(e.target.value)))}> 
                    {
                            [...Array(10).keys()].map(x => (<option key={x+1} value={x+1}>{x+1}</option>))
                    }
                    </select></li>
                    <li className="mt-2" key={x.id}><button key={x.id} className="btn btn-primary" onClick={() => removeFromCartHandler(x.id)}>Remove from favourites</button></li>
                </ul>
            ))
        }

        </div>
    )
}
