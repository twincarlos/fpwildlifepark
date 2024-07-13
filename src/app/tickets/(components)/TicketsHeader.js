"use client"
import "../Tickets.css";

export default function TicketsHeader({ language }) {
    return (
        <section className="tickets-header">
            <h2>{language === "English" ? "Book Tickets" : ""}</h2>
        </section>
    );
};