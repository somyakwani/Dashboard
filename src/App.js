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
import { useState,useEffect } from "react";

function App() {
  let [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
          paddingTop:isMobile?"1rem": "3rem",
          paddingLeft:isMobile?"1rem": "6rem",
          // border: "1px solid black",
          backgroundColor: "black",
          width:"100%",
          overflow:"hidden",
          paddingRight:isMobile?"1rem":"3rem",
        }}
      >
        <div
          style={{ color: "white", marginBottom: "2px", marginInline: "4px",fontSize:"32px" }}
        >
          Dashboard
        </div>

        <Row >
          <Col md={6} lg={6} sm={12}>
            <StatisticsCards></StatisticsCards>
          </Col>

          {/* right grid */}
          <Col md={6} lg={6} sm={12}>
           
           <NetProfit></NetProfit>
           
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}} >
          <Col md={6} lg={6} sm={12} >
          <ActivityChart></ActivityChart></Col>
          <Col >
           
        <MenuList></MenuList>
         
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col md={6} lg={6} sm={12}>
            <RecentOrders></RecentOrders>
          </Col>
          <Col md={6} lg={6} sm={12}>
          <CustomerFeedback>

          </CustomerFeedback>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
export default App;
