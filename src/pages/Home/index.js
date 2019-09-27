import React from "react";

import Layout from "../../components/Layout";
import "./style.css";
/*----------- */

import Ryan from "../../assets/home/people/Ryan.png";
import Apeach from "../../assets/home/people/Apeach.png";
import Tube from "../../assets/home/people/Tube.png";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div>HOME</div>
        <div style={{ display: "flex" }}>
          <div className="member">
            <img src={Ryan} alt="ryan" />
          </div>
          <div className="member">
            <img src={Apeach} alt="Apeach" />
          </div>
          <div className="member">
            <img src={Tube} alt="Tube" />
          </div>
        </div>
      </Layout>
    );
  }
}
export default Home;