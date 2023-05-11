import React from "react";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  //contructor
  //render
  //componentDidMount

  async componentDidMount() {
    //best place to make API call as it is called after render
    console.log("Parent-component did mount");
  }

  componentDidUpdate() {
    console.log("Parent Component Did Update");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1> About us page</h1>
        <p>This is a new page created for About us details!!!</p>
        {/*  <Profile key={1} name="First Child" /> */}
        <Profile name="Child" />
      </div>
    );
  }
}

export default About;

// Output :
// Parent Constructor
// Parent Render
// First Child Constructor
// First Child Render
//----Now DOm is updated
// First Child ComponentDidMount
// Second Child ComponentDidMount
// Parent ComponentDidMount
