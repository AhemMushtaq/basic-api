import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Loader(props) {
  return (
    <div>
      {props.load ? (
        <ReactBootStrap.Spinner
          className="loader"
          animation="grow"
          variant="primary"
        />
      ) : null}
    </div>
  );
}

export default Loader;
