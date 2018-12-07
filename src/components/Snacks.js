import React from 'react'

const Snacks = (props) => {

    return(
        <div className="snacksCont">
            <div className="snacksLeft">
                <h3>name of snack</h3>
                <img className="imgThumb" src={require("./300.png")} alt="hookers"></img>
            </div>
            <div className="snacksRight">
                <h4>Average rating is: </h4>
                <h4>Description and such:</h4>
                <p>This is the descrpition of the item</p>

            </div>
        </div>
        
    )
}
export default Snacks