import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from ".";

const Watchlist = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const handleRemoveFromCart = (cartItems) => {
        dispatch(removeFromCart(cartItems))
    }
    return(
        <div>
            <h2 className="d-flex justify-content-center text-light">Anime List</h2>
            <div className="container-fluid">
                <div className="row">
                {cart.cartItem?.map((cartItems)=>{
                return(
                    <div class="col col-sm-4 col-md-2" key={cartItems.mal_id}>
                        <figure class="figure">
                            <img src={cartItems.images.webp.image_url} class="img-fluid rounded" alt="..." style={{height: "150px"}}/>
                        </figure>
                        <div className='container-fluid'>
                                <button className=' m-2 btn btn-dark' onClick={()=> handleRemoveFromCart(cartItems)}>Remove</button>
                            </div>
                    </div>
                )
            })}
            </div>
            </div>
        </div>
    )
}


export default Watchlist;