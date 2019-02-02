import React from 'react';
import Snake from './Snake';
import StartBtn from './StartBtn.js'

// get the props from the parent component's state
const Board = props => {

    const { boardWidth } = props.data;
    
    const style =  {
        width: `${boardWidth}vw`,
        height: `${boardWidth}vw`,
    }

    // startover needs to match up with startover passed in in app.js
    return (
        <div className="container game">
            <div className="board" style={style}>
            <Snake data={props.data}/>
            <StartBtn onClick={props.startover} data={props.data} />
            </div>
        </div>
    )
}

export default Board;