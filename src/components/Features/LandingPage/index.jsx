import { useNavigate } from "react-router-dom";

import './style.css';
import CustomButton from "../../AntDComponents/CustomButton"
import Header from "../Header/index"
import Icons from '../../../utils/Icons';

const LandingPage = () => {
  const navigateToExploreNow = useNavigate();
  const { LargeGridCover, SmallGridCover1, SmallGridCover2, } = Icons;

  const handleExploreNow = () => {
    navigateToExploreNow('/explore-now');
  }

  return (
    <div className='landing-page'>
      {/* header section */}
      <Header isShow onClick={handleExploreNow} />
      {/* main content */}
      <div className="align-content-landing-page">
        <section className="content-side">
          <div className="underlined-text">
            <h1><span className="h1-bottom-border">Explore</span> The New World With Tourbay</h1>
            <p>No matter where in the world you want to go, we
              can help get you there and make your tour a
              stupendous memory.</p>

          </div>
          <CustomButton className="align-start" text="Explore Now" title="Explore Now" onClick={handleExploreNow} />
        </section>
        <section className="cover-img-side">
          <div className="photo-grids">
            <div className="grid-item large">
              <img className="align-right" src={LargeGridCover} alt="Large image" />
            </div>
            <div className="grid-item ">
              <img className="align-end" src={SmallGridCover1} alt="Small image 1" />
            </div>
            <div className="grid-item">
              <img className="align-top" src={SmallGridCover2} alt="Small image 2" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage
