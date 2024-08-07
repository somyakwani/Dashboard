import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 4.5,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2454682683/display_1500/stock-photo-middle-aged-businessman-looking-at-camera-working-holding-smartphone-mature-years-old-business-2454682683.jpg",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
    image: "https://www.shutterstock.com/shutterstock/photos/2151833739/display_1500/stock-photo-portrait-of-a-young-latin-woman-with-pleasant-smile-and-crossed-arms-isolated-on-grey-wall-with-2151833739.jpg",
  },
  {
    name: "Devon Lane",
    rating: 4,
    comment:
      "Normally wings are wings, but theirs are lean meaty and tender, and flavorful.",
    image: "https://www.shutterstock.com/shutterstock/photos/2441453323/display_1500/stock-photo-happy-female-entrepreneur-using-touchpad-while-working-in-the-office-and-looking-at-camera-copy-2441453323.jpg",
  },
];

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array(fullStars).fill(<FaStar color="gold" />)}
      {halfStar && <FaStarHalfAlt color="gold" />}
      {Array(emptyStars).fill(<FaRegStar color="gold" />)}
    </>
  );
};

const CustomerFeedback = () => {
  return (
    <div
      style={{
        backgroundColor: "#222831",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop:"6px",
        maxHeight:"23rem",
        overflow:'auto',
       
      }}
    >
      <h4>Customer's Feedback</h4>
      <ListGroup variant="flush">
        {feedbacks.map((feedback, index) => (
          <ListGroupItem
            key={index}
            style={{ backgroundColor: "#222831", borderColor: "#222831" }}
          >
            <Card style={{ backgroundColor: "#222831", color: "white" }}>
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Card.Title>{feedback.name}</Card.Title>
                    <Card.Text>{getStars(feedback.rating)}</Card.Text>
                  </div>
                </div>
                <Card.Text>{feedback.comment}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CustomerFeedback;
