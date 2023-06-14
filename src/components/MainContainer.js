import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, portfolio, onBuy, onSell, onSort, onFilter }) {
  return (
    <div>
      <SearchBar onSort={onSort} onFilter={onFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuy={onBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onSell={onSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
