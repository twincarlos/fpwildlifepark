import "../Tours.css";

export default function ToursHeader({language}) {
    return (
        <section className="tours-header">
            <h2>{language === "English" ? "Tour Prices & Departures" : "Precios de Tours y Salidas"}</h2>
        </section>
    );
};