import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <img src={work.w_img} alt={work.w_name} />
              <h1 className="head1">
                {work.w_name}
                <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                  <button className="btnwork">Live Preview</button>
                </a>
              </h1>
            </div>
          );
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
