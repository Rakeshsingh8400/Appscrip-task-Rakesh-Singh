import "../styles/filterMenu.css";
import { useState } from "react";
import Custimize from "./customise";
import Recommended from "./filtter";
export default function FilterMenuDataItem(){
  const [showFilter, setShowFilter] = useState(false);
  const [showRecom, setShowRecom] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleFilterRecom = () => {
    setShowRecom(!showRecom);
  };
    return(
        <>
        <div className="divfilter">
      <div className="divfilter-2" />
      <div className="divfilter-3">
        <div className="divfilter-4">
          <div className="divfilter-5">
            <div className="-items">3425 Items</div>
            <div className="divfilter-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/594071ad9d39af559486e3edea0b23370b7d5419c4f5a420c7e7dfb0c4f0a7ff?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
                className="img"
              />
              <div className="hide-filter" onClick={toggleFilter}>
              {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
              </div>
            </div>
          </div>
          <div className="divfilter-7">
            <div className="recommended" onClick={toggleFilterRecom}>{showRecom ? 'RECOMMENDED' : 'RECOMMENDED'}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32bf7102853f26de22012b3e5b490446d1d784ff29a1d71b9af000fb9a593b81?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
              />
              <div className="filterRecom">
              {showRecom && <Recommended/>}
              </div>
          </div>
        </div>
        <div className="divfilter-8" />
      </div>
      <div className="filterCust">

    {showFilter && <Custimize/>}
      </div>
    </div>
        </>
    )
}