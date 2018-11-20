import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="ui container">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
