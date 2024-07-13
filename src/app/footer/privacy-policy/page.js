"use client"
import "../Footer.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PrivacyPolicy() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="page-header privacy-policy-header">
                <h2>
                    {language === "English" ? "Fragile Planet Wildlife Park Privacy Policy" : ""}
                </h2>
            </section>
            <section className="page-content">
                <strong>
                    {language === "English" ? "Protecting Your Privacy" : ""}
                </strong>
                <p>
                    {language === "English" ? "Fragile Planet Wildlife Park (\"we\" or \"us\") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you visit ourpark or use our website." : ""}
                </p>
                <strong>
                    {language === "English" ? "Information We Collect:" : ""}
                </strong>
                <p>
                    {language === "English" ? "We may collect the following information from you:" : ""}
                </p>
                <div>
                    <p>
                        <strong>{language === "English" ? "- Transaction Information:" : ""}</strong>{language === "English" ? " When you purchase tickets or concessions, we may collect your name, contact information, and purchase history." : ""}
                    </p>
                    <p>
                        <strong>{language === "English" ? "- Images and Recordings:" : ""}</strong>{language === "English" ? " We may record video footage and take pictures of guests throughout the park for security and marketing purposes. By entering the park, you consent to your image being captured." : ""}
                    </p>
                    <p>
                        <strong>{language === "English" ? "- Website Usage Information:": ""}</strong>{language === "English" ? " When you visit our website, we may collect information about your browsing activity, such as the pages you visit and the links you click. This information is collected anonymously and used to improve our website.": ""}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "How We Use Your Information" : ""}
                </strong>
                <p>
                    {language === "English" ? "- To process your ticket purchases and fulfill your requests. - To provide you with information about the park, such as upcoming events and promotions. - To improve the safety and security of the park. - To improve our marketing efforts." : ""}
                </p>
                <strong>
                    Disclosure of Your Information
                </strong>
                <p>
                    {language === "English" ? "We may disclose your information to third-party service providers who help us operate the park and website. We will only share your information with these providers to the extent necessary for them to perform their services. We will not sell or rent your information to any third party." : ""}
                </p>
                <strong>
                    {language === "English" ? "Security" : ""}
                </strong>
                <p>
                    {language === "English" ? "We take reasonable steps to protect your information from unauthorized access, use, or disclosure. However, no website or electronic storage system is completely secure." : ""}
                </p>
                <strong>
                    {language === "English" ? "Children's Privacy" : ""}
                </strong>
                <p>
                    {language === "English" ? "We are committed to protecting the privacy of children. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us at [Email Address] and we will delete it." : ""}
                </p>
                <strong>
                    {language === "English" ? "Guest Conduct" : ""}
                </strong>
                <p>
                    {language === "English" ? "We reserve the right to remove guests from the park for disorderly conduct, injury to animals, damage to park property, or any other reason deemed necessary by park staff. Guests who damage park property will be held financially responsible for the repairs or replacements." : ""}
                </p>
                <strong>
                    {language === "English" ? "Refusal of Service" : ""}
                </strong>
                <p>
                    {language === "English" ? "We reserve the right to refuse service and purchasing of tickets to any guest at our discretion." : ""}
                </p>
                <strong>
                    {language === "English" ? "Changes to This Policy" : ""}
                </strong>
                <p>
                    {language === "English" ? "We may update this Privacy Policy from time to time. We will post any changes on our website." : ""}
                </p>
                <strong>
                    {language === "English" ? "Contact Us" : ""}
                </strong>
                <p>
                    {language === "English" ? "If you have any questions about this Privacy Policy, please contact us at info@fpwildlifepark.com or by calling us at (956) 710 - 2025." : ""}
                </p>
            </section>
        </main>
    );
};