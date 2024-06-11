import { Container } from "react-bootstrap";
import "./App.css";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroTabs from "./components/Tabs/HeroTabs";
import PopularPosts from "./components/PopularPosts/PopularPosts";

function App() {
  return (
    <>
      <Header />
      <HeroTabs />
      <Container className=" grid lg:grid-cols-12">
        <div className=" lg:col-span-9 px-2">
          <Articles />
        </div>
        <div className=" lg:col-span-3 bg-slate-100 p-2 rounded-md">
          <PopularPosts />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
