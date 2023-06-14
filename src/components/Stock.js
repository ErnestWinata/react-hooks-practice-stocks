import React from "react";

function Stock({ stock, onClick }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
          <button onClick={onClick}>{stock.inPortfolio ? 'Sell' : 'Buy'}</button>
        </div>
      </div>
    </div>
  );
}
export default Stock;
