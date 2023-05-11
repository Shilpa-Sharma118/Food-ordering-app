import React from "react";

//class based component should always have render() method.
// Its is madatory
// Now, you return from render()
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shilpa Class",
      userInfo: {
        id: "Dummy",
        login: "Dummy",
      },
    };
    console.log("Children - Constructor " + this.props.name);
  }

  async componentDidMount() {
    console.log("Children -component did mount1 " + this.props.name);
    const data = await fetch("https://api.github.com/users/Shilpa-Sharma118");
    const json = await data.json();
    console.log("json looks like", json);
    this.setState({ userInfo: json });
    console.log(
      "Children -component did mount --this was called after async " +
        this.props.name
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name) {
      //code for the check if name state has changed
      // ow this can eb done very easily by
      // adding dependency in useEffect hook
    }
    console.log("Children Component Did Update");
  }

  componentWillUnmount() {
    //This will be called when I change to someother page
    console.log("Children Component Will Unmount");
  }

  render() {
    console.log("Children - Render " + this.props.name);
    return (
      <div>
        <h1> Profile Class Component!!</h1>
        <h2>Id : {this.state.userInfo.id}</h2>
        <h3>Login : {this.state.userInfo.login}</h3>
        {/* <button
          onClick={() => {
            //We DONOT state mutate directly
            // here count 2 will remain the same
            // and only count will change in state. So, it is just modifying whatever you are passing
            this.setState({ count: 1 });
          }}
        >
          Count in Class
        </button> */}
      </div>
    );
  }
}

export default Profile;
