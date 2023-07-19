import React, { useState } from "react";

function Square(props) {

    const [state, setState] = useState();

    const handleClick = () => {
        setState('red');
        props.onClick() 
    };

    return (
      <button className="square" onClick={handleClick} style={{ background: state}}>
        {props.value}
      </button>
    );
}

export default Square;
