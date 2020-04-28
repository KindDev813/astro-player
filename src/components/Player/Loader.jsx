import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="loader-container">
        <Loader
          type="Circles"
          color="#102542"
          height={50}
          width={50}
          timeout={30000000}
        />
      </div>
    );
  }
}
