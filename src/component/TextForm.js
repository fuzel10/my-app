import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // setText("You have clicked on up click")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick = ()=>{
        // setText("You have clicked on up click")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleExtraSpace = ()=>{

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra space","success");
    }

    const handleCopy = () =>{
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");

    }

    const handleClear = ()=>{
        setText("");
        props.showAlert("Cleared Text","success")
    }

    const handleOnChange = (event)=>{
        console.log("handle on change")
    setText(event.target.value);
    }

    const[text,setText] = useState("")
    return (
    <>
<div className="mb-3" style ={{color : props.mode === 'dark'? 'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style ={{backgroundColor : props.mode === 'dark'? '#040e1e':'white',color : props.mode === 'dark'? 'white' : 'black'}} rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
    <button className='btn btn-primary mx1' onClick={handleExtraSpace}>Remove extra space</button>
</div>
<div className='container my-3' style ={{color : props.mode === 'dark'? 'white':'black'}}>
    <h2>Your text summary</h2>
    <p> {text.split(' ').length} words and {text.length} characters </p>
    <p>{0.008 * text.split(' ').length} Minutes to read </p>
    
    <h2>Preview Text</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
</>
  )
}
