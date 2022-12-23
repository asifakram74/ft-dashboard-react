import React from 'react'

const Theme = (props) => {
    return (
        <div>
            
    <div className="vertical-layout vertical-menu-collapsible page-header-dark vertical-modern-menu preload-transitions 1-column blank-page blank-page white login-bg">
        <div>
          <div className="row">
            <div className="col s12">
              <div className="container">
                <div id="login-page" className="row ">
                
                {props.children}
                </div>
              </div>
              <div className="content-overlay"></div>
            </div>
          </div>
        </div>
      </div>
  
  
        </div>
    )
}

export default Theme
