import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "../components/Features/LandingPage/index";
import ExploreNow from "../components/Features/ExploreNow/index";
import AllTours from "../components/Features/Tour/index";
import TourDetailsPage from "../components/Features/TourDetails/index";
import BookTour from "../components/Features/BookingTour/index";
import MyTours from "../components/Features/MyTours/index";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/explore-now" element={<ExploreNow />} />
                <Route path="/all-tours" element={<AllTours />} />
                <Route path="/tour-details/:id" element={<TourDetailsPage />} />
                <Route path="/book-tour/:id" element={<BookTour />} />
                <Route path="/my-tours" element={<MyTours />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
