import Userprofile from "./components/UserProfile";

const App = () => {
  return (
    <div>
      {/* call/render the component */}
      <Userprofile
        name="Emmanuel Tweneboah"
        email="emma@gmail.com"
        location="Kumasi-Ghana"
        about="publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a"
      />
      <Userprofile
        name="Agnes"
        email="agnes@gmail.com"
        location="Accra-Ghana"
        about="about me"
      />
      <Userprofile
        name="Thomas"
        email="thomas@gmail.com"
        location="Accra-Ghana"
        about="about me"
      />
    </div>
  );
};

export default App;
