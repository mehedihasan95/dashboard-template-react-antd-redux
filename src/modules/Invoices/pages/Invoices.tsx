import React from "react";
import { Link } from "react-router-dom";

const Invoices: React.FC = () => {
  return (
    <React.Fragment>
      <p>
        Invoices module is currently under development. Stay tuned for updates!
        🚧🚩
      </p>
      <Link to={`${25}`}>View Details</Link>
    </React.Fragment>
  );
};

export default Invoices;
