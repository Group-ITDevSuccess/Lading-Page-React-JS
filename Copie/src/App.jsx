import {useEffect, useState} from "react";
import JsonData from './data/data.json'
import SmoothScroll from "smooth-scroll"
import {Navigation} from "./components/Navigation";
import {Header} from "./components/Header";
import {Features} from "./components/Features";
import {About} from "./components/About";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
})

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(()=>{
        setLandingPageData(JsonData)
    }, []);


    return (
        <div>
            <Navigation/>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
        </div>
    )
}

export default App;