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
            <HomeComponent2
                tour1Description={
                    <>
                        <p className="text-align-justify">{"Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through our Safari Park. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals."}</p>
                    </>
                }
                tour1Link="/tickets"
                tour2Description={
                    <>
                        <p className="text-align-justify">{"For an exclusive and personalized experience, our VIP RTV Tour offers the ultimate adventure. Spend two hours exploring our Safari Park on a private RTV ride, guided by our expert staff. You'll see magnificent animals up close, enjoy special activities not available to the public, and receive complimentary animal food for feeding."}</p>
                    </>
                }
                tour2Link="/tickets"
                tour3Description={
                    <>
                        <p className="text-align-justify">{"Experience the wild in an exclusive setting with our Private Safari Wagon Tour for up to 40 people. Explore the Safari Park with of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for large families, friends, or special occasions, this tour offers a unique, private, and unforgettable connection with nature."}</p>
                    </>
                }
                tour3Link="/tickets"
                tour4Description={
                    <>
                        <p className="text-align-justify">{"Visit us this Friday night from 7-9 for Tipsy Safari Night. Join us for a night of fun, wine tasting, animal encounters, amphibian lab tours, and adults only safari wagon rides. Perfect for couples, friend groups, dates, or ladies nights. Ticket includes FREE wine tastings and food samples from The Fat Pelican- Louisiana Food Truck. Book at the park or call ahead to reserve your tickets."}</p>
                    </>
                }
                tour4Link="/tickets"
            />
            <HomeComponent3 />
            <HomeComponent4 />
            <HomeComponent5 />
        </main>
    );
};