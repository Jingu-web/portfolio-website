import "./portfolio.scss";
import { PortfolioList } from "../portfolioList/portfolioList";
import { useState } from "react";

export const Portfolio = () => {
  const [selected, setSelected] = useState("webApp");

  const list = [
    {
      id: "webApp",
      title: "Web App",
    },
    {
      id: "staticWebsite",
      title: "Static Website",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "proposal",
      title: "Proposal",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
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
