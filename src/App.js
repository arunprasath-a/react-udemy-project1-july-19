import React, { Component } from "react";
import Cardlist from "../src/components/card-list/card-list.component";
import SearchBox from "../src/components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValues: [],
      searchField: ""
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ userValues: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

 
  render() {
    const { userValues, searchField } = this.state;

    const filteredUsers = userValues.filter(users =>
      users.name.toLowerCase().includes(searchField.toLowerCase())
    );

    // const filteredUsers = userValues.filter(users =>
    //   users.name.includes(searchField)
    //   );

    return (
      <React.Fragment>
        <div className="App">
        <h1>Players</h1>
          <SearchBox
            placeholder="Search User"
            handleChange={this.handleChange}
          />

          <Cardlist monsters={filteredUsers} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
