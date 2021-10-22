import "./portfolio.scss";

export const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Web App</li>
        <li>Static Website</li>
        <li>Desing</li>
        <li>Proposal</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt="" />
          <h3>Sample App</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Sample App</h3>
        </div>
      </div>
    </div>
  );
};
