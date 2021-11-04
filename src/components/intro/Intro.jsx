import "./intro.scss";
import Mask from "../../assets/mask.jpg";
import Video from "../../assets/video.mp4";

export const Intro = () => {
  return (
    <div className="intro" id="intro">
      <video src={Video} autoPlay loop muted type="mp4" />
      <img src={Mask} className="mask" alt="" />
      <h2>Hello.</h2>
    </div>
  );
};
