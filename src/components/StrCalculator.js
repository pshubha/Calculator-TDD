import { useState } from "react";
import "./StrCalculator.css"

export  const add =(numbers)=> {
    if (numbers === '') {
      return 0;
    }

    let sum;
    if(numbers.match(/\n/g)){
        const newLineNum = numbers.split(/[\n,]/).map(num => Number(num));
        sum = newLineNum.reduce((num, acc) => num+acc, 0);
        return sum;   
    }
    const newNum = numbers.split(',').map(num => Number(num));
    sum = newNum.reduce((num, acc) => num+acc, 0);
    return sum;
}

function StrCalculator(){
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(null);

    const handleChange= (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = () =>{
       const sum = add(input);
       setOutput(sum);
    }

    return(
        <div className="calculator">
            <textarea type="text" value={input} rows="5" cols="30" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Calculate</button>
            {output && <p>Result: {output}</p>}
        </div>
    )
}

export default StrCalculator;
