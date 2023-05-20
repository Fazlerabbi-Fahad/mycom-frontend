import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import TermsAndCondition from "./../../Pages/TermsAndCondition/TermsAndCondition";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blog/Blogs";
import TrackOrder from "../../Pages/TrackOrder/TrackOrder";
import FAQ from "../../Pages/FAQ/FAQ";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/termsandcondition',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/trackorder',
                element: <TrackOrder></TrackOrder>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
        ]
    },

])
export default routes;
