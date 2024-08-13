import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIce } from "../redux/";

function CakeContainer(props) {
  return (
    <>
      <div>
        <h2>Number of cakes are - {props.cake.numCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
      </div>
      <div>
        <h2>Number of ice creams are - {props.icecream.numIce}</h2>
        <button onClick={props.buyIce}>Buy ice cream</button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cake: state.cake,
    icecream: state.icecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIce: () => dispatch(buyIce()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
