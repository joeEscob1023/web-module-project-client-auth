import React from "react";

const AddFriend = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="name"
          onChange={props.handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="age"
          onChange={props.handleChange}
          placeholder="age"
        />
        <input
          type="email"
          name="email"
          onChange={props.handleChange}
          placeholder="email"
        />
        <button>Add Friend</button>
      </form>
      <div>
        <h2>New Friend!</h2>
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
};

export default AddFriend;
