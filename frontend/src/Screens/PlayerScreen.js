import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoaderBox from "../Components/LoaderBox";
import { detailsPlayer } from "../actions/playerActions";
export default function PlayerScreen(props) {
    const dispatch = useDispatch();
    const playerId = props.match.params.id;
    const playerDetail = useSelector(state => state.playerDetail);
    const {loading , player} = playerDetail;
    const [qty, setQty] = useState(1);
   
    useEffect(() => {
        dispatch(detailsPlayer(playerId));
    },[dispatch, playerId])

    const addtocartHandler = () => {
        props.history.push(`/favourites/${player._id}?point=${qty}`);
    }
    return (
        <div>
            { loading? <LoaderBox></LoaderBox> : ( <div>
                <div className="card mb-2">
                <div className="card-body">
                <h5>{player.username}</h5>
                <div className="card-subtitle">Specifications</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Level : {player.level}</li>
                    <li className="list-group-item">STR : {player.str}</li>
                    <li className="list-group-item">DEF : {player.def}</li>
                 </ul>
                 <label>
                     Point
                 </label>
                 <select className="form-control" value={qty} onChange={(e) => setQty(e.target.value)}>
                        {
                            [...Array(10).keys()].map(x => (<option key={x+1} value={x+1}>{x+1}</option>))
                        }
                 </select>
                 <button onClick={addtocartHandler} className="btn btn-primary mt-4">Add to Favourites</button>
                </div>
            </div>
            </div>
            )
        }
        </div>
    )
}
