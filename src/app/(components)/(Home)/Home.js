import "./Home.css";
import { HomeComponent1 } from "./(components)/HomeComponent1/HomeComponent1";
import { HomeComponent2 } from "./(components)/HomeComponent2/HomeComponent2";
import { HomeComponent3 } from "./(components)/HomeComponent3/HomeComponent3";
import { HomeComponent4 } from "./(components)/HomeComponent4/HomeComponent4";
import { HomeComponent5 } from "./(components)/HomeComponent5/HomeComponent5";

export function Home() {
    return (
        <main>
            <HomeComponent1 />
            <HomeComponent2 />
            <HomeComponent3 />
            <HomeComponent4 />
            <HomeComponent5 />
        </main>
    );
};