"use client"
import { useEffect, useState } from "react";

import PrimaryButton from "@/app/(components)/(PrimaryButton)/PrimaryButton";

export function HomeComponent1({language}) {
    const [currentClass, setCurrentClass] = useState(true);

    // useEffect(() => {
    //     const interval = setInterval(() => setCurrentClass(!currentClass), 7000);
    //     return () => clearInterval(interval);
    // }, [currentClass]);

    return (
        <section className={`home-component home-component-1 background-${currentClass ? "1" : "2"}`}>
            <div className="container">
                <div className="text-box">
                    <p>{language === "English" ? "Explore animals like never before!" : "Explora los animales como nunca antes!"}</p>
                </div>
                <div className="button-box">
                    <PrimaryButton text={language === "English" ? "Book your Tour" : "Reserva tu Tour"} path="/tickets"/>
                </div>
            </div>
        </section>
    );
};