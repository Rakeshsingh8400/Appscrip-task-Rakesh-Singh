import Discover from "./components/discover";
import FilterMenuDataItem from "./components/filterMenu";
import LandingPage from "./components/landing";

export function Home() {
  return (
    <>
      <div>
        <Discover />
      </div>
      <div>
        <FilterMenuDataItem />
      </div>
      <div>
        <LandingPage/>
      </div>
    </>
  );
}
