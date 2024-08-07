import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const statistics = [
  {
    icon: <FaShoppingCart size={20} color="white" />,
    title: "Total Orders",
    value: 75,
    change: "3%",
    changeType: "increase",
    bgColor: "#1565C0",
  },
  {
    icon: <FaCheckCircle size={20} color="white" />,
    title: "Total Delivered",
    value: 70,
    change: "3%",
    changeType: "decrease",
    bgColor: "#388E3C",
  },
  {
    icon: <FaTimesCircle size={20} color="white" />,
    title: "Total Cancelled",
    value: 5,
    change: "3%",
    changeType: "increase",
    bgColor: "#D32F2F",
  },
  {
    icon: <FaDollarSign size={20} color="white" />,
    title: "Total Revenue",
    value: "$12k",
    change: "3%",
    changeType: "decrease",
    bgColor: "#7B1FA2",
  },
];

const StatisticsCards = () => {
  return (
    <Row>
      {statistics.map((stat, index) => (
        <Col style={{height:'100%'}} key={index} sm={6} md={3}>
          <Card
            style={{
              backgroundColor: "#222831",
              color: "white",
              borderRadius: "10px",
              padding: "5px",
              height:"12rem"
            }}
          >
            <div className="d-flex flex-column justify-content-between">
              <span style={{marginTop:'10px'}}>
              <div
                style={{
                  backgroundColor: stat.bgColor,
                  borderRadius: "10px",
                  padding: "8px",
                  marginRight: "10px",
             display:"inline",
            
             
                }}
              >
                
                {stat.icon}
              </div>
              </span>
              <div className="d-flex flex-column justify-content-between" style={{height:'60%'}}>
                <Card.Text style={{ marginTop:'4px' }}>{stat.title}</Card.Text>
                <div>
                <h2 style={{ margin: 0 }}>{stat.value}</h2>
                <div className="d-flex align-items-center">
                  {stat.changeType === "increase" ? (
                    <FaArrowUp color="green" />
                  ) : (
                    <FaArrowDown color="red" />
                  )}
                  <span
                    style={{
                      color: stat.changeType === "increase" ? "green" : "red",
                      marginLeft: "5px",
                    }}
                  >
                    {stat.change}
                  </span>
                </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatisticsCards;
