import * as React from "react";
import "../styles/filtter.css";
export default function Recommended() {
  
return (
  <>
    <div className="filterdiv">
      <div className="filterdiv-2">
        <div className="filterdiv-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e00ac95aed745334f4ee82a738c944a8ac1cc36a5877be5696899966e2647e14?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
            className="filter-img"
          />
          <div className="recommended">recommended</div>
        </div>
        <div className="newest-first">Newest first</div>
        <div className="popular">popular</div>
        <div className="price-high-to-low">Price : high to low</div>
        <div className="price-low-to-high">Price : low to high</div>
      </div>
    </div>
  </>
);
}