import React from "react";
import { ListGroup } from "react-bootstrap";
import {
  FaBullseye,
  FaHamburger,
  FaUtensils,
  FaChevronRight,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const menuItems = [
  { icon: <FaBullseye color="white" />, color: "#D32F2F", text: "Goals" },
  {
    icon: <FaHamburger color="white" />,
    color: "#1976D2",
    text: "Popular Dishes",
  },
  { icon: <FaUtensils color="white" />, color: "#0288D1", text: "Menus" },
];

const MenuList = () => {
  return (
    <div
      style={{
        backgroundColor: "#222831",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      
      }}
    >
      <ListGroup variant="flush">
        {menuItems.map((item, index) => (
          <ListGroup.Item
            key={index}
            style={{
              backgroundColor: "#222831",
              borderColor: "#222831",
              display: "flex",
              alignItems: "center",
              paddingBlock: "33px",
            }}
          >
            <div
              style={{
                backgroundColor: item.color,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              {item.icon}
            </div>
            <div style={{ flexGrow: 1, color: "white" }}>{item.text}</div>
            <FaChevronRight color="white" />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MenuList;
