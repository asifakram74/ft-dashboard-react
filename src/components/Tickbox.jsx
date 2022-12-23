import React from 'react'

function Tickbox(props) {
    return(
<>
 
            <div className="row  pt-2 mr-2 ml-2 " >
                <form action="">
                <div className="col s12 m9 l12  pl-0 pr-0">
                  <ul className=" mb-0 no-border  pl-0 pr-0">

                    <li className=""> 
                      <h4 className="">{props.title}</h4>
                      
                    </li>
                 </ul>
                </div>
                <div className="col s12 m3 l12 desktop-right" >
                  <ul className=" mb-0  no-border">
                      
                      <label className="checkbox_bluetwo  right">
                        <input type="checkbox" className="filled-in" />
                        <span>&nbsp;</span> </label>
                  </ul>
                </div>
                </form>
              </div>

</>
    );
}
 
export default Tickbox
