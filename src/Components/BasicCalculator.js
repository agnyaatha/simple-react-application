import React, { useState } from 'react'
import './BasicCalculator.css'

function BasicCalculator() {
    const [digit , setDigit] = useState("0");
    // const [numbers, setNumbers] = useState(0);
    const [expression, setExpression] = React.useState("");
  
    const handleButtonPress = (value) => {
        if(expression[expression.length-1] === "="){
            setExpression("");
            setDigit(value);
            return;
        }
        digit === "0" ? setDigit(value) : setDigit( digit + value);
    }

    const handleOperatorClick = (operator) => {
        const temp =  expression  + digit + operator  ;
        setExpression(temp);
        // console.log(temp);
        setDigit("0");
    }

    const handleClearClick = () => {
        setExpression("");
        setDigit(0);
    }

    const handleEquals = () => {
        const temp =  expression + digit  ;
        setExpression(temp + "=");
        setDigit(eval(temp));
    // const operatorReg = /[\+\-\*\/]/g ;
    // let ans = temp.split(operatorReg);
    // let sign = temp.split(/[0-9]/).filter((item) => item !== '');
    // console.log(temp);
    // console.log(ans);
    // console.log(sign);
    // console.log(eval(temp));
        
    }
  
  
    return (
    <div class="basic-calculator">
        <div className='display-wrapper'>
            <div className='secondary-display'><span>{expression}</span></div>
            <div className='primary-display'><span>{digit}</span></div>
        </div>
        <div className='button-wrapper'>
            <div className='buttons grid-col-span-2'><button className='cancel-color' onClick={() => handleClearClick()} id="clear">AC</button></div>
            <div className='buttons'><button className='operator-color' onClick={() => handleOperatorClick("/")} id="divide">/</button></div>
            <div className='buttons'><button className='operator-color' onClick={() => handleOperatorClick("*")} id="multiply">*</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("7")} id="seven">7</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("8")} id="eight">8</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("9")} id="nine">9</button></div>
            
            <div className='buttons'><button className='operator-color' onClick={() => handleOperatorClick("-")} id="subtract">-</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("4")} id="four">4</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("5")} id="five">5</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("6")} id="six">6</button></div>
            <div className='buttons'><button className='operator-color' onClick={() => handleOperatorClick("+")} id="add">+</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("1")} id="one">1</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("2")} id="two">2</button></div>
            <div className='buttons'><button className='number-color'  onClick={() => handleButtonPress("3")} id="three">3</button></div>
            <div className='buttons grid-row-span-2'><button className='equal-color' onClick={() => handleEquals()} id="equal">=</button></div>
            <div className='buttons grid-col-span-2'><button className='number-color' onClick={() => handleButtonPress(0)}  id="zero">0</button></div>
            <div className='buttons'><button className='number-color' onClick={() => handleButtonPress(".")} id="decimal">.</button></div>
        </div>
    </div>
  )
}

export default BasicCalculator