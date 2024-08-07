import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaArrowUp } from "react-icons/fa";

const NetProfit = () => {
  const percentage = 70;

  return (
    <div
      style={{
        backgroundColor: "#222831",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "90%",
      }}
    >
      <Row>
        <Col md={6}>
          <h5>Net Profit</h5>
          <h1>$ 6759.25</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaArrowUp color="green" />
            <span style={{ color: "green", marginLeft: "5px" }}>3%</span>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div style={{ width: "120px", height: "120px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: "white",
                pathColor: "#3498db",
                trailColor: "#1e1e1e",
              })}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ fontSize: "12px", color: "gray" }}>
            *The values here have been rounded off.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default NetProfit;
