import "../Tours.css";

export default function ToursHeader({language}) {
    return (
        <section className="tours-header">
            <h2>{language === "English" ? "Plan Your Visit" : "Programa Tu Visita"}</h2>
        </section>
    );
};
