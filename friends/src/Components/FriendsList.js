import React from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

import AddFriend from "./AddFriend";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  handleChange = (e) => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value,
      },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      id: Date.now(),
      name: this.state.friends.name,
      age: parseInt(this.state.friends.age),
      email: this.state.friends.email,
    };

    console.log("our new friend", newFriend);
    axiosWithAuth()
      .post("/friends", newFriend)
      .then((res) => {
        console.log(res);

        this.setState({
          ...this.state,
          newFriend,
        });
      })
      .catch((err) => console.log(err));
  };

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        this.setState({
          ...this.state,
          friends: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        <AddFriend
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          name={this.state.friends.name}
          age={this.state.friends.age}
          email={this.state.friends.email}
        />
      </div>
    );
  }
}
export default FriendsList;
