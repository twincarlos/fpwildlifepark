import "./Home.css";
import { HomeComponent1 } from "./(components)/HomeComponent1/HomeComponent1";
import { HomeComponent2 } from "./(components)/HomeComponent2/HomeComponent2";

export function Home() {
    return (
        <main>
            <HomeComponent1 />
            <HomeComponent2 />
        </main>
    );
};