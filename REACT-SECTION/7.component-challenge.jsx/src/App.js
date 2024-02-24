import "./App.css";
import ProfileAbout from "./components/ProfileAbout";
import ProfileImage from "./components/ProfileImage";
import ProfileName from "./components/ProfileName";
import ProfileRole from "./components/ProfileRole";
import Profileicons from "./components/Profileicons";
function App() {
  return (
    <div>
      <div className="instagram-post-1">
        <div className="akar-iconstwitter-fill" />

        <section className="post-frame">
          <div className="post-frame-child" />
          <div className="rectangle-shape-parent">
            <div className="rectangle-shape" />
            <div className="wrapper-ellipse-shape">
              {/* Image component */}
              <ProfileImage image="https://cdn.pixabay.com/photo/2024/01/10/16/20/woman-8499928_1280.jpg" />
            </div>
          </div>
          <div className="secondary-frame">
            <div className="title-text-parent">
              <div className="title-text">
                {/* profile name component */}
                <ProfileName name="Masynctech" />
                {/* profile role */}
                <ProfileRole role="MERN Stack Dev" />
              </div>
              <div className="personal-choice">
                <div className="vertical-line" />
                {/* About */}
                <ProfileAbout />
              </div>
            </div>
            <div className="brand-frame">
              {/* Social icons */}
              <Profileicons />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
