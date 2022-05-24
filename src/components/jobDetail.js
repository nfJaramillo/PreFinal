import React from "react";

const JobDetail = (props) => {
    return (
      <div className="card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CasablancaPoster-Gold.jpg/330px-CasablancaPoster-Gold.jpg" className="card-img-top" id="imagen" alt="..."/>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
        </div>
      </div>
    );
  };


  export default JobDetail;