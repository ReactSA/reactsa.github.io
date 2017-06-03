import React from 'react';



const TopBanner = () => {


    return(
        <div>
            <div className="header clearfix">
                <h3 className="text-muted">ReactSA</h3>
            </div>

            <div className="jumbotron">
                <div className="row">
                <img id='reactLogo' src='../img/reactLogo.png' className="col-sm-2"/> <h1 className="col-sm-9">San Antonio React User Group</h1>
                </div>
                <p className="lead">Join other React developers in sharing knowledge, discoveries, and code. <br/> Contribute to open source. Open to all skill levels.</p>
            </div>
        </div>

            );

};


export default TopBanner;