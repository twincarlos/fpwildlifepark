import "../Tours.css";

export default function ToursHeader({language}) {
    return (
        <section className="tours-header">
            <h2>{language === "English" ? "Tour Prices & Departures" : ""}</h2>
        </section>
    );
};