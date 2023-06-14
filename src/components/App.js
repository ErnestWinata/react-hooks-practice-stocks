import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sort, setSort] = useState("Alphabetically");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then((r) => r.json())
    .then(setStocks);
  }, []);

  function handleBuy(stock) {
    setPortfolio((portfolio) => [...portfolio, stock]);
  }

  function handleSell(stock) {
    setPortfolio((portfolio) => portfolio.filter((p) => p.id !==stock.id));
  }

  const sortedStocks = [...stocks].sort((a, b) => {
    if(sort === "Price") {
      return a.price - b.price;
    } else {
      return a.name.localCompare(b.name);
    }
  });

  const filteredStocks = sortedStocks.filter((stock) => {
    if (filter === "All") {
      return true;
    } else {
      return stock.type === filter;
    }
  });

  return (
    <div>
      <Header />
      <MainContainer
        stocks={filteredStocks}
        portfolio={portfolio}
        onBuy={handleBuy}
        onSell={handleSell}
        onSort={setSort}
        onFilter={setFilter}
        />
    </div>
  );
}

export default App;
