import React from "react";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div>
      Bar Component <Link to="/foo">Foo</Link>
    </div>
  );
};

export default Bar;
