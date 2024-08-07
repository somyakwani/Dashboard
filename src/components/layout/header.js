import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SearchInput from "../searchBar";
import {
  MailIcon,
  MainMenuIcon,
  Notificationicon,
  ProfilePicIcon,
  SearchIcon,
  SettingIcon,
} from "../../assets/icons";

function HeaderComponent() {
  return (
    <Navbar
      style={{ zIndex: 5, paddingInline: "10px", backgroundColor: "#222831" }}
      className="justify-content-between"
    >
      {/* menu icon */}

      <Form inline>
        <Row>
          <Col>
            <div
              style={{
                color: "#82acff",
                padding: "4px",
                height: "32px",
                width: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              {MainMenuIcon}
            </div>
          </Col>

{/* search bar */}

          <Col xs="auto">
            <SearchInput></SearchInput>
          </Col>
        </Row>
      </Form>
{/* icons */}
      <Form inline style={{ height: "100%" }}>
        <Row>
          <Col>
            <div
              style={{
                color: "#fff",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "4px",
                height: "26px",
                width: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {MailIcon}
            </div>
          </Col>

          <Col>
            <div
              style={{
                color: "#fff",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "4px",
                height: "26px",
                width: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {SettingIcon}
            </div>
          </Col>

          <Col>
            <div
              style={{
                color: "#fff",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "4px",
                height: "26px",
                width: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {Notificationicon}
            </div>
          </Col>

          <Col>
            <div
              style={{
                color: "#fff",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "4px",
                height: "26px",
                width: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {ProfilePicIcon}
            </div>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}
export default HeaderComponent;
