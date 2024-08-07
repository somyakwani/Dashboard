import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div
      style={{
        padding: "5px",
        backgroundColor: "#393e46",
        borderRadius: "10px",
        marginLeft:"10%"
      }}
    >
      <Form>
        <Form.Group controlId="formBasicSearch">
          <InputGroup>
            <InputGroup.Text
              style={{
                backgroundColor: "#393e46",
                borderColor: "#393e46",
                color: "white",
              }}
            >
              <FaSearch color="white" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search"
              style={{
                backgroundColor: "#393e46",
                color: "white",
                borderColor: "#393e46",
                
              }}
            />
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchInput;
