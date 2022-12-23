import React from 'react'
 
function Steps(props) {
    return(
<>


 
           <div className="row">
                <div className="col s12 m12 l12">
              <ul className="collection mb-0 steps no-border">
                    <li className="collection-item avatar">
                            <img src={props.icon} alt="" className="circle" />
                            <div className="step-textarea">
                                <h3 className="">{props.title}</h3>
                                <p className="medium-small">{props.text}</p>
                            </div>
                    </li>
              
                  </ul>
                </div>
               
            </div>
  
    

</>
    );
}
 

export default Steps
