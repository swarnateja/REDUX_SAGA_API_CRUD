import { Component } from "react";
// import Contacts from "./components/Contacts";
// import Header from "./components/Header";
import MobileDetails from "./components/MobilesDetails";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileDetails />
      </div>
    );
  }
}
