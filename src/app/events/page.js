import EventsHeader from "./(components)/EventsHeader";

export default function Events() {
    return (
        <main>
            <EventsHeader />
            <section>
                <iframe className="calendar" src="https://calendar.google.com/calendar/embed?src=info%40fpwildlifepark.com&ctz=America%2FChicago" />
            </section>
        </main>
    );
};