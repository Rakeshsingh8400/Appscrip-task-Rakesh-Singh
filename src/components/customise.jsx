import * as React from "react";

export default function Custimize() {
return (
  <>
    <div className="filters">
      <div className="customizable">
        <div className="value-1">
          <div className="checkbox" />
          <div className="customizble">
            <input type="checkbox"/>
            Customizble</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="filter-1">
        <div className="title">
          <div className="name">
            <div className="ideal-for">IDEAL FOR</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32bf7102853f26de22012b3e5b490446d1d784ff29a1d71b9af000fb9a593b81?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
            />
          </div>
          <div className="all">All</div>
          <div style={{color:"gray",margin:"10px",textDecorationLine:"underline"}}>Unselected all</div>
          <div style={{margin:"10px"}}><input type="checkbox"/>Men</div>
          <div style={{margin:"10px"}}><input type="checkbox"/>Women</div>
          <div style={{margin:"10px"}}><input type="checkbox"/>Baby & Kids</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="filter-2">
        <div className="title">
          <div className="name">
            <div className="occasion">occasion</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
            />
          </div>
          <div className="all">All</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="filter-3">
        <div className="title">
          <div className="name">
            <div className="work">work</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
            />
          </div>
          <div className="all">All</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="filter-4">
        <div className="title">
          <div className="name">
            <div className="fabric">fabric</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
            />
          </div>
          <div className="all">All</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="filter-7">
        <div className="title">
          <div className="name">
            <div className="segment">segment</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
            />
          </div>
          <div className="all">All</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="filter-8">
        <div className="title">
          <div className="name">
            <div className="suitable-for">suitable for</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
            />
          </div>
          <div className="all">All</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="filter-10">
        <div className="title">
          <div className="name">
            <div className="raw-materials">raw materials</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
            />
          </div>
          <div className="all">All</div>
        </div>
      </div>
      <div className="seperator" />
      <div className="filter-11">
        <div className="title">
          <div className="name">
            <div className="pattern">Pattern</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?apiKey=03a5a2da7ebf45a3a23b5b66115f14ae&&apiKey=03a5a2da7ebf45a3a23b5b66115f14ae"
              className="img"
            />
          </div>
          <div className="all">All</div>
        </div>
      </div>
      <div className="seperator" />
    </div>
    <style jsx>{`
      .filters {
        display: flex;
        max-width: 300px;
        flex-direction: column;
        color: var(--Text-Text, #252020);
        justify-content: start;
        position:absolute;
        background-color:white;
        font: 18px Simplon Norm, sans-serif;
      }
      .customizable {
        display: flex;
        width: 100%;
        flex-direction: column;
        font-weight: 700;
        white-space: nowrap;
        text-transform: uppercase;
        justify-content: start;
      }
      .value-1 {
        display: flex;
        width: 100%;
        gap: 8px;
      }
      .checkbox {
        background-color: var(--Schemes-On-Error, #fff);
        display: flex;
        width: 22px;
        height: 22px;
      }
      .customizble {
        flex-grow: 1;
        width: 266px;
        flex-basis: auto;
      }
      .seperator {
        min-height: 1px;
        margin-top: 24px;
        width: 100%;
      }
      .filter-1 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      .title {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      .name {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 40px 100px;
        font-weight: 700;
        text-transform: uppercase;
        justify-content: space-between;
      }
      .ideal-for {
        align-self: stretch;
        margin: auto 0;
      }
      .img {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        align-self: stretch;
        margin: auto 0;
      }
      .all {
        font-weight: 400;
        margin-top: 8px;
      }
      .filter-2 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        white-space: nowrap;
        justify-content: start;
      }
      .occasion {
        align-self: stretch;
        margin: auto 0;
      }
      .filter-3 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        white-space: nowrap;
        justify-content: start;
      }
      .work {
        align-self: stretch;
        margin: auto 0;
      }
      .filter-4 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        white-space: nowrap;
        justify-content: start;
      }
      .fabric {
        align-self: stretch;
        margin: auto 0;
      }
      .filter-7 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        white-space: nowrap;
        justify-content: start;
      }
      .segment {
        align-self: stretch;
        margin: auto 0;
      }
      .filter-8 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      .suitable-for {
        align-self: stretch;
        margin: auto 0;
      }
      .filter-10 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      .raw-materials {
        align-self: stretch;
        margin: auto 0;
      }
      .filter-11 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        white-space: nowrap;
        justify-content: start;
      }
      .pattern {
        align-self: stretch;
        margin: auto 0;
      }
    `}</style>
  </>
);
}