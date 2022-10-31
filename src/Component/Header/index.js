import React from "react";
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <>
            <nav class="text-light p-2 position-sticky" >
                <div className="row m-2" style={{ textDecoration: 'none', color: 'red', float: 'right' }}>
                    <button className="btn btn-default"><Link className="navbar-brand col-md-1" to={"./"} style={{ textDecoration: 'none', color: 'red' }}><h2>Anime</h2></Link></button><br></br>
                    <button className="btn btn-default"><Link className="navbar-brand col-md-1" to={"./watchlist"} style={{ textDecoration: 'none', color: 'red' }}><h2>Watchlist</h2></Link></button>
                </div>

            </nav>
        </>
    )
}

export default Header;