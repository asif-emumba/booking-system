import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "../components/LandingPage/index";
import ExploreNow from "../components/ExploreNow/index";
import AllTours from "../components/Tour/index";
import TourDetailsPage from "../components/TourDetails/index";
import BookTour from "../components/BookingTour/index";
import MyTours from "../components/MyTours/index";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/explore-now" element={<ExploreNow />} />
                <Route path="/all-tours" element={<AllTours />} />
                <Route path="/tour-details/:id" element={<TourDetailsPage />} />
                <Route path="/book-tour/:id" element={<BookTour />} />
                <Route path="/update-tour/:id" element={<BookTour mode="update" />} />
                <Route path="/my-tours" element={<MyTours />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
