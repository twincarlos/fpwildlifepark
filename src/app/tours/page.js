import "../(components)/(Home)/Home.css";
import ToursHeader from "./(components)/ToursHeader";
import { HomeComponent2 } from "../(components)/(Home)/(components)/HomeComponent2/HomeComponent2";

export default function Tours() {
    return (
        <main>
            <ToursHeader/>
            <HomeComponent2 tourPrice1="$15" tourPrice2="$200" tourPrice3="$500" tourDepartureDetails={true} />
        </main>
    );
};