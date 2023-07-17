import React from 'react'

export default function About(props) {
    let mystyle ={
        color:props.mode ==='dark'?'white':'#042743',
        backgroundColor:props.mode ==='dark'?'#042743':'white'
      
    }
  return (
    <>
    <div className='my-2 mx-2' style={mystyle}><h1> About US </h1>
    
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        TextUtils 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
  
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={mystyle} aria-expanded="false" aria-controls="collapseTwo">
        Free 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        Browser 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
.
      </div>
    </div>
  </div>
</div>
</div>
</>
  )
}
