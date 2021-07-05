import React,{ useEffect} from 'react';
import LoaderBox from "../Components/LoaderBox";
import Player from "../Components/player";
import Product from "../Components/product";
import { useDispatch, useSelector } from 'react-redux';
import {listPlayers} from "../actions/playerActions";
import { listProducts } from '../actions/productActions';
export default function HomeScreen() {
    const dispatch = useDispatch();
    const playerList = useSelector((state) => state.playerList);
    const productsList = useSelector((state) => state.productsList);
    const {productLoading,productError,products} = productsList;
    const {loading, error, players} = playerList;

    useEffect(() => {
        dispatch(listPlayers());
        dispatch(listProducts());
      
    },[dispatch]);

    return (
        <div className="row">
           <div className="col-md-6">
            {loading? <LoaderBox></LoaderBox> : error? (<h4>{error}</h4>) : (<div>

                <h2 className="text-center">ALL PLAYERS</h2>
                {players.map((player) => (
                    <Player key={player.id} player={player}></Player>
                )
               
                    )}

            </div>)}

            </div>

            <div className="col-md-6">
            <h2 className="text-center">ALL PRODUCTS</h2>
            {productLoading? <LoaderBox></LoaderBox> : productError? (<h4>{productError}</h4>) : !products ? (<div className="alert alert-danger"><h4>Products Not Found</h4></div>) : (<div>
                { products.map((product) =>
            <Product key={product._id} product={product}></Product>
                )}
            </div>
            )}
        
            </div>
              


    
      </div>
    )
    }

