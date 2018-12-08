import React from 'react'

const Header = (props) => {
    return(
        <div className="headerCont">
            <img className="meerkat" src={require('./meerkat.png')}></img>
            <h1 className="headerText" >Galvanize Sch'nacks</h1>
            <img className="meerkat" src={require('./meerkat.png')}></img>

        </div>
    )
}
export default Header