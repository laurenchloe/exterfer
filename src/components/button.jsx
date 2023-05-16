import { useState } from "react";
import React from 'react';

function CTAButton () {

    const whenButtonIsPressed = () => {
        setCount(count + 1)
    }

    return (
        <button onClick={whenButtonIsPressed}>
          {"(3) The counter currently is return: "+ count}
        </button>
      );

}

export default IncreaseButton3;