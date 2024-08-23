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
            </section>
            <Link href="https://forms.gle/UnWE5YB9WDAf9g3KA" target="_blank">{language === "English" ? "Scholarship Request" : "Scholarship Request"}</Link>
        </main>
    );
};
