import React from 'react'

const Snacks = (props) => {
    // const snackList = props.searched.map(item => { 
    //     // var average = item.rating.reduce((a, b) => ((a + b)/item.rating.length +1), 0)
    //     return(
    //         <div className="snacksCont">
    //             <div className="snacksLeft">
    //                 <h3>{item.name}</h3>
    //                 <img className="imgThumb" src={require(`${item.img}`)} alt="hookers"></img>
    //             </div>
    //             <div className="snacksRight">
    //                 {/* <h4>Average rating is: {average} </h4> */}
    //                 <h4>Description:</h4>
    //                 <p>{item.description}</p>
    //             </div>
    //         </div>
    //     )
    // })
    // return(
    //     snackList
    // )
    return(
        <div className="snacksCont">
            <div className="snacksLeft">
                <h3>Name</h3>
                <img className="imgThumb" src={require('./300.png')} alt="hookers"></img>
            </div>
            <div className="snacksRight">
                <h4>Average rating is: 6</h4>
                <h4>Description:</h4>
                <p>describe here</p>
            </div>
        </div>
    )
}
export default Snacks