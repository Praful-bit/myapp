import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPclick = ()=>{
        // console.log("uppercase was clicked"+text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Convert to Uppercase!","success")
    }
  const handleCopy =()=>{
    let text =document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy","successfully")
  }
  const handleExtraSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove ExtraSpaces!","successfully")
  }
  
    const handleClearClick = ()=>{
      
      setText(" ")
      props.showAlert("Clear!","successfully")
  }
    const handleOnchange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handlelowerClick = ()=>{
      // console.log("Lover Click")
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert("Convert to Lowerrcase!","success")
  }
    const [text, setText]= useState(' ');
   return(
    <>
    <div className='container' style={{color: props.mode==='dark'?'White':'#042743'}}>
   <h1>{props.heading}</h1>  
  <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white'}} onChange={handleOnchange} id="mybox" cols="30" rows="10"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-1" onClick={handleUPclick}>convert to Upper-case</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handlelowerClick}>convert to Lower-case</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.split(" ").filter((element)=>{return element.length!==0}).length} characters</p>
<p>{0.08* text.split(" ").length}Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  )
   }