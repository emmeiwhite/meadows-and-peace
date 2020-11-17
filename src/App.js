import "./App.css";
import { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import Home from "./components/home/Home";
import NinjazList from "./components/ninjaz-list/NinjazList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar logo="Rediscover" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ninjaz" component={NinjazList} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
