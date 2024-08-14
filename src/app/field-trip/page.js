"use client";
import "./FieldTrip.css";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import safariFieldTrip from "../(assets)/safari-field-trip.png";
import fieldTripDetails from "../(assets)/field-trip-details.png";
import Link from "next/link";

export default function FieldTrip() {
    const { language } = useLanguage();
    return (
        <main className="field-trip">
            <section className="field-trip-header">
                <h2>{language === "English" ? "Field Trip" : "Field Trip"}</h2>
            </section>
            <section className="field-trip-body">
                <Image className="field-trip-img" alt="safari field trip" src={safariFieldTrip} />
                <Image className="field-trip-img" alt="field trip details" src={fieldTripDetails} />
                {/* <div className="field-trip-card front-card">
                    <div className="field-trip-content">
                        <h1>Field Trip Fragile Planet</h1>
                        <p>Includes</p>
                        <div className="field-trip-details">
                            <span>Safari Wagon Ride</span>
                            <span>Wallaby Walkabout</span>
                            <span>Animal Shows</span>
                            <span>Petting Zoo</span>
                            <span>Animal Feed Cup</span>
                            <span>Gem Mine Experience</span>
                            <span>Lunch Pavilion</span>
                        </div>
                    </div>
                    <Image alt="field trip front image" src={fieldTripFrontImage} />
                </div>
                <div className="field-trip-card back-card">
                    <Image alt="field trip front image" src={fieldTripBackImage} />
                    <div className="field-trip-content">
                        <h1>Details</h1>
                        <p className="bold">$15 per student Safari Field Trip</p>
                        <p>Contact us for scholarship opportunities</p>
                        <p className="bold">$20 per student Safari Field Trip + Pumpkin Patch</p>
                        <p>All student bring home a pumpkin</p>
                        <p className="bold">1 Free Teacher per class</p>
                        <p className="bold">300 maximum participants per day</p>
                        <p>this is the total number of visitors we can</p>
                        <p>accomodate in a normal morning field</p>
                        <p>trip schedule, 300 includes teachers and chaperones</p>
                        <p className="bold">Pre-order lunch available $9 per student</p>
                        <br />
                        <p className="bold">New Indoor Bathrooms with AC</p>
                        <p className="bold">First field trip October 1st</p>
                        <p className="bold">Low income schools can apply for a scholarship</p>
                    </div>
                </div> */}
            </section>
            <Link href="https://forms.gle/UnWE5YB9WDAf9g3KA" target="_blank">{language === "English" ? "Scholarship Request" : "Scholarship Request"}</Link>
        </main>
    );
};
