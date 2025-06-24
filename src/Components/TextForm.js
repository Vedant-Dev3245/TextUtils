  import React,{useState} from 'react'

  export default function TextForm(props) {

    const handleUpClick=()=>{
      console.log("ok");
      let newText=text.toUpperCase();
      setText(newText)
      props.setAlert({
      msg: "Converted to uppercase!",
      type: "success"
    });
    setTimeout(() => {
      props.setAlert(null);
    }, 1400);
    }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
    const handleDownClick=()=>{
      let newtext2=text.toLowerCase();
      setText(newtext2);
      props.setAlert({
      msg: "Converted to lowercase!",
      type: "success"
    });
    setTimeout(() => {
      props.setAlert(null);
    }, 1400);
    }
    const[text,setText]=useState("");
    const arr=text.split(" ")
    let len=arr.length;
    for(let i=0;i<arr.length && len>=0;i++){
      if(arr[i]===""){
        len--;
      }
    }
    
    
  const [btntext, setbtntext] = useState("Enable Dark Mode")
  
  const toggleDarkMode=()=>{
   if(props.darkMode===true){
    props.setdarkMode(false)
    setbtntext("Enable Dark mode")
     props.setAlert({
      msg: "Light mode has been enabled!",
      type: "success"
    });
    setTimeout(() => {
      props.setAlert(null);
    }, 1400);
    

   }
   else{
     props.setdarkMode(true)  
    setbtntext("Enable Light mode")
    props.setAlert({
      msg:"Dark mode has been enabled!",
      type:"success"
    })
     setTimeout(() => {
      props.setAlert(null);
    }, 1400);
    

     
   }
  }
  let myStyle={}
  if(props.darkMode===true){
    myStyle={
      color:"white",
      backgroundColor:"#292929"
    }
  }
  else{
    myStyle={
      color:"black",
      backgroundColor:"white"
    }
  }
const clear=()=>{
 setText("")
 props.setAlert({
      msg: "Text cleared!",
      type: "success"
    });
    setTimeout(() => {
      props.setAlert(null);
    }, 1400);
}
    return (
      <div className="container" style={myStyle}>  
      <h1 style={myStyle}>Enter the text to analyze </h1>
      <div className="mb-3" style={myStyle}>
      <textarea className="form-control" onChange={handleOnChange}  value={text} id="exampleFormControlTextarea1" rows="8" style={myStyle}></textarea>
      <button className="btn btn-primary myS3 my-3"  onClick={handleUpClick}>  Convert to Uppercase</button>
      <button className="btn btn-primary myS3 mx-2 my-3"  onClick={handleDownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary myS3 my-3 " onClick={clear} >Clear Text</button>
      <button className="btn btn-primary myS3 my-3 mx-2 " onClick={toggleDarkMode} >{btntext}</button>

    </div>
    <div style={myStyle}>
      <h2 style={myStyle}>Text summary </h2>
      <p style={myStyle}> 
        {text.length} characters and {len} words</p>
    </div>
      </div>

    )
  }
