import { BrowserRouter, Routes, Route } from "react-router";
import ExploreNow from '../components/explore-now/ExploreNow'
import LandingPage from '../components/landing-page/LandingPage'
import AllTours from "../components/tours/AllTours";
import TourDetailsPage from "../components/tourDetails/TourDetailsPage";
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/explore-now" element={<ExploreNow />} />
                <Route path="/all-tours" element={<AllTours />} />
                <Route path="/tour-details/:id" element={<TourDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
