import { useState } from "react";
import "./StrCalculator.css"

export  const add =(numbers)=> {
    if (numbers === '') {
      return 0;
    }

    let sum;
    let newNum; 

    newNum = numbers.match(/-?\d+/g).map(Number);

    const negativeNumber = newNum.filter(num => num < 0);
    console.log(negativeNumber, newNum,numbers)
    if (negativeNumber.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumber.join(',')}`);
    }

    let filterNum = newNum.filter(num => num <= 1000);
    sum = filterNum.reduce((num, acc) => num+acc, 0);
    return sum;
}

function StrCalculator(){
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(null);

    const handleChange= (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = () =>{
        try{
            const sum = add(input);
            setOutput(sum);
        }catch(error){
            setError(error.message)
        }
    }

    return(
        <div className="calculator">
            <textarea type="text" value={input} rows="5" cols="30" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Calculate</button>
            {output && <p>Result: {output}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default StrCalculator;
