import "./portfolioList.scss";

export const PortfolioList = ({ title, id, active, setSelected }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};
