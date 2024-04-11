import "./UserProfile.css";
import style from "./UserProfile.module.css";
const App = () => {
  // Inline style object for the container
  const containerStyle = {
    textAlign: "center",
    margin: "20px",
  };
  return (
    // <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    //   <div class="shrink-0">
    //     <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
    //   </div>
    //   <div>
    //     <div class="text-xl font-medium text-black">ChitChat</div>
    //     <p class="text-slate-500">You have a new message!</p>
    //   </div>
    // </div>
    <div>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        A simple info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        A simple dark alert—check it out!
      </div>
    </div>
  );
};

export default App;
