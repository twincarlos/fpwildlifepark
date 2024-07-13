import "../Events.css";

export default function EventsHeader({ language }) {
    return (
        <section className="events-header">
            <h2>{language === "English" ? "Events Calendar" : "Calendario de Eventos"}</h2>
        </section>
    );
};