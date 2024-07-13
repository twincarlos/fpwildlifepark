"use client"
import "../Footer.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TermsOfUser() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="page-header terms-of-use-header">
                <h2>
                    {language === "English" ? "Terms of Use" : ""}
                </h2>
            </section>
            <section className="page-content">
                <strong>
                    {language === "English" ? "Permitted use:" : ""}
                </strong>
                <p>
                    {language === "English" ? "Images and video(s) are provided to the media solely for reproduction, public display, and distribution in a professional journalistic non-commercial and non-sponsored context in connection with newspaper, magazine, broadcast media (radio, television) or internet media (ad enabled blog, webcasts, webinars, podcasts). Image(s) and video(s) may not be made available for public or commercial download, licensing or sale." : ""}
                </p>
                <strong>
                    {language === "English" ? "Additional limitation:" : ""}
                </strong>
                <p>
                    {language === "English" ? "Media acknowledges and agrees that Fragile Planet Wildlife Park specifically " : ""}<strong>{language ? "does not grant" : ""}</strong>{language ? " a right to sublicense any image and/or video without the prior express written consent of Fragile Planet Wildlife Park in each instance and at its sole discretion." : ""}
                </p>
                <strong>
                    {language === "English" ? "Required credit and caption:" : ""}
                </strong>
                <p>
                    {language === "English" ? "All image and/or video uses must bear the copyright notice and/or be properly credited to the relevant photographer, as shown in the image metadata, and must be accompanied by a caption that makes reference to Fragile Planet Wildlife Park. Any uses in which the image and/or video appears without proper mention of Fragile Planet Wildlife Park are subject to paid licensing." : ""}
                </p>
            </section>
        </main>
    );
};