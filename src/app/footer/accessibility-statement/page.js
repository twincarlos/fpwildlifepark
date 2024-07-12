"use client";
import "../Footer.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AccessibilityStatement() {
    const {language} = useLanguage();
    return (
        <main>
            <section className="page-header accessibility-statement-header">
                <h2>
                    {language === "English" ? "Accessibility Statement for Fragile Planet Wildlife Park" : ""}
                </h2>
            </section>
            <section className="page-content">
                <p>
                    {language === "English" ? "Fragile Planet Wildlife Park is committed to providing an inclusive and enjoyable experience for all our guests, including visitors with disabilities. We are constantly working to improve accessibility throughout the park." : ""}
                </p>
                <p>
                    {language === "English" ? "Here's a breakdown of our current accessible features:" : ""}
                </p>
                <strong>
                    {language === "English" ? "Parking:" : ""}
                </strong>
                <p>
                    {language === "English" ? "- Designated handicap accessible parking spaces are available. We recommend calling ahead at (956) 710-2025 to inquire about space availability and to make arrangements for assistance if needed." : ""}
                </p>
                <strong>
                    {language === "English" ? "Getting Around the Park:" : ""}
                </strong>
                <p>
                    {language === "English" ? "- Our open-air wagon is equipped with a wheelchair lift to ensure easy boarding and disembarking. - Key locations throughout the park, including the gift shop and amphibian lab, have wheelchair ramps for easy access." : ""}
                </p>
                <strong>
                    {language === "English" ? "Exhibits:" : ""}
                </strong>
                <p>
                    {language === "English" ? "- The petting zoo and the kangaroo and wallaby walkabouts are designed to be wheelchair-friendly with wide open spaces for guests to explore." : ""}
                </p>
                <strong>
                    {language === "English" ? "Additional Services:" : ""}
                </strong>
                <p>
                    {language === "English" ? "- We are happy to answer any accessibility-related questions you may have. Please call us at (956) 710-2025 before your visit." : ""}
                </p>
                <strong>
                    {language === "English" ? "We are Always Improving:" : ""}
                </strong>
                <p>
                    {language === "English" ? "We are continually evaluating and improving the accessibility of our facilities and programs. If you have any suggestions on how we can better serve you, please don't hesitate to let us know by contacting us at (956) 710-2025 or emailing us at info@fpwildlifepark.com." : ""}
                </p>
            </section>
        </main>
    );
};