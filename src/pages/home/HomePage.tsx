import "../../assets/scss/homestyle.scss";
import OrangeVector from "../../assets/images/vectors/OrangeVector.svg";
import { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <>
        <img
          src={OrangeVector}
          alt=""
          srcSet=""
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </>
    );
  }
}

export default HomePage;
