const Userprofile = (props) => {
  console.log(props);
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
      <h2>User Profile</h2>
      <p>
        <b>Name</b>: {props.name}
      </p>
      <p>
        <b>Email</b>: {props.email}
      </p>
      <p>
        <b>Location</b>:{props.location}
      </p>
      <p>
        <b>About</b>:{props.about}
      </p>
    </div>
  );
};
export default Userprofile;
