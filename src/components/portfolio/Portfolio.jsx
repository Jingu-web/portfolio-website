import { useState, useEffect } from "react";

import "./portfolio.scss";
import { PortfolioList } from "../portfolioList/portfolioList";
import {
  webAppPortfolio,
  staticWebsitePortfolio,
  designPortfolio,
  bannerPortfolio,
  proposalPortfolio,
} from "../../data";

export const Portfolio = () => {
  const [selected, setSelected] = useState("webApp");
  const [data, setData] = useState([]);

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
      id: "banner",
      title: "Banner",
    },
    {
      id: "proposal",
      title: "Proposal",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "webApp":
        setData(webAppPortfolio);
        break;
      case "staticWebsite":
        setData(staticWebsitePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "banner":
        setData(bannerPortfolio);
        break;
      case "proposal":
        setData(proposalPortfolio);
        break;

      default:
        setData(webAppPortfolio);
    }
  }, [selected]);

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
        {data.map((d) => (
          <a href={d.url} target="_blank" rel="noopener noreferrer">
            <div className="item" key={d.id}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
