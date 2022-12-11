import React,{useState} from "react";


function Form(props) {
    const [inputText,setInputText] = useState("");
  
    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
      
    }

    return(
        <div className='form' onChange={handleChange}>
            <input type="text" onChange={handleChange} value={inputText}/>
            <button onClick={()=>{
                props.onAdd(inputText)
                setInputText("")
            }}>
            <span>Add</span></button>
      </div>
    );
}
export default Form;