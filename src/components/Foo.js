import React from "react";
import { Link } from "react-router-dom";

const Foo = () => {
  return (
    <div>
      Foo Component <Link to="/bar">Bar</Link>
    </div>
  );
};

export default Foo;
