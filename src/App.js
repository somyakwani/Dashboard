import Layout from "./components/layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BagIcon, DeliveryIcon, ProfilePicIcon } from "./assets/icons";
import RecentOrders from "./components/layout/recentOrder";
import CustomerFeedback from "./components/layout/feedback";
import ActivityChart from "./components/activityChart";
import MenuList from "./components/menuList";
import NetProfit from "./components/netProfit";
import StatisticsCards from "./components/stats";

function App() {
  let cards = [
    { label: "Total Order", value: 75, icon: DeliveryIcon },
    { label: "Total Delivered", value: 70, icon: BagIcon },
    { label: "Total Cancelled", value: 5, icon: BagIcon },
    { label: "Total Revenue", value: 12, isCurrency: true, icon: BagIcon },
  ];
  let list = [
    { label: "Goals" },
    { label: "Popular Dishes" },
    { label: "Menus" },
  ];

  return (
    <Layout>
      <div
        style={{
          paddingTop: "3rem",
          paddingLeft: "6rem",
          border: "1px solid black",
          backgroundColor: "black",
        }}
      >
        <div
          style={{ color: "white", marginBottom: "2px", marginInline: "4px",fontSize:"32px" }}
        >
          Dashboard
        </div>

        <Row >
          <Col>
            <StatisticsCards></StatisticsCards>
          </Col>

          {/* right grid */}
          <Col>
           
           <NetProfit></NetProfit>
           
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}} >
          <Col >
          <ActivityChart></ActivityChart></Col>
          <Col >
           
        <MenuList></MenuList>
         
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col>
            <RecentOrders></RecentOrders>
          </Col>
          <Col>
          <CustomerFeedback>

          </CustomerFeedback>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
export default App;
