import "../Events.css";

export default function EventsHeader({ language }) {
    return (
        <section className="events-header">
            <h2>{language === "English" ? "Events Calendar" : ""}</h2>
        </section>
    );
};