import React from "react";
import "./Flat.css";

class Flat extends React.Component {
  render() {
    const title = this.props.flat.price + this.props.flat.name;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`,
    };
    return (
      <div className="flat">
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">{title}</div>
      </div>
    );
  }
}

export default Flat;
