"use client"
import "../Footer.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TicketsTermsAndConditions() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="page-header tickets-terms-and-conditions-header">
                <h2>
                    {language === "English" ? "Safari Park Ticket Term & Conditions" : ""}
                </h2>
            </section>
            <section className="page-content">
                <p>
                    {language === "English" ? "Thank you for purchasing tickets to Fragile Planet Wildlife Park! These terms and conditions apply to all admission and tour tickets." : ""}
                </p>
                <strong>
                    {language === "English" ? "General Admission:" : ""}
                </strong>
                <p>{language === "English" ? "- Tickets are valid only for the date and tour selected at purchase." : ""}</p>
                <strong>
                    {language === "English" ? "Safari Wagon Tour:" : ""}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- Your Safari Wagon tour ticket includes:" : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "- Admission to the Kangaroo Walkabout and Petting Zoo." : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "- A ride through the safari park on our open-air wagon." : ""} (<strong>{language === "English" ? "Note:" : ""}</strong>{language === "English" ? " Ride duration can vary between 45 minutes and 1 hour depending on guest loading times.)" : ""}
                    </p>
                    <p>
                        {language === "English" ? "- Each ticket grants one guest a single ride on the Safari Wagon." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- To ride the wagon again, you must purchase an additional ticket." : ""}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "VIP RTV Tour:" : ""}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "Your VIP RTV Tour ticket includes:" : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "- Admission to the Kangaroo Walkabout and Petting Zoo." : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "- A ride through the safari park on our open-air wagon. (Note: Ride duration can vary between 1 hour 45 minutes and 2 hours depending on guest loading times.)" : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "- Animal feed for interaction during the tour." : ""}
                    </p>
                    <p className="indent">
                        {language === "English" ? "- A rhinoceros iguana feeding encounter." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- Each VIP RTV Tour ticket grants three (3) guests participation in the tour." : ""}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "Tour Times:" : ""}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- All tours depart promptly at their scheduled times." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- Late arrivals will not be accommodated, and the tour duration will not be extended." : ""}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "Refunds & Exchanges:" : ""}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- Tickets are non-refundable and non-exchangeable." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- In exceptional circumstances, we may offer a credit for a future tour of equal value. Please contact us at (956) 710-2025 or info@fpwildlifepark.com to inquire about applying a credit." : ""}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "Privacy Policy:" : ""}
                </strong>
                <p>
                    {language === "English" ? "- By entering the park, guests grant Fragile Planet Wildlife Park the right to film, video, record or photograph guests on park property for any reason." : ""}
                </p>
                <p>
                    {language === "English" ? "We recommend reviewing these terms and conditions thoroughly before purchasing your tickets. If you have any questions, please don't hesitate to contact us!" : ""}
                </p>
            </section>
        </main>
    );
};