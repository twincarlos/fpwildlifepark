"use client"
import "../Footer.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TermsOfUser() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="page-header terms-of-use-header">
                <h2>
                    {language === "English" ? "Terms of Use" : "Terminos de Uso"}
                </h2>
            </section>
            <section className="page-content">
                <strong>
                    {language === "English" ? "Permitted use:" : "Uso permitido:"}
                </strong>
                <p>
                    {language === "English" ? "Images and video(s) are provided to the media solely for reproduction, public display, and distribution in a professional journalistic non-commercial and non-sponsored context in connection with newspaper, magazine, broadcast media (radio, television) or internet media (ad enabled blog, webcasts, webinars, podcasts). Image(s) and video(s) may not be made available for public or commercial download, licensing or sale." : "Las imágenes y vídeos se facilitan a los medios de comunicación únicamente para su reproducción, exhibición pública y distribución en un contexto periodístico profesional no comercial y no patrocinado en relación con periódicos, revistas, medios de difusión (radio, televisión) o medios de Internet (blogs habilitados para anuncios, webcasts, seminarios web, podcasts). Las imágenes y vídeos no podrán ponerse a disposición del público para su descarga, licencia o venta comercial."}
                </p>
                <strong>
                    {language === "English" ? "Additional limitation:" : "Informacion adicional:"}
                </strong>
                <p>
                    {language === "English" ? "Media acknowledges and agrees that Fragile Planet Wildlife Park specifically " : "Los medios de comunicación reconocen y aceptan que Fragile Planet Wildlife Park específicamente "}<strong>{language ? "does not grant" : "no concede"}</strong>{language ? " a right to sublicense any image and/or video without the prior express written consent of Fragile Planet Wildlife Park in each instance and at its sole discretion." : " el derecho a sublicenciar cualquier imagen y/o vídeo sin el previo consentimiento expreso y por escrito de Fragile Planet Wildlife Park en cada caso y a su entera discreción."}
                </p>
                <strong>
                    {language === "English" ? "Required credit and caption:" : "Crédito y título exigidos:"}
                </strong>
                <p>
                    {language === "English" ? "All image and/or video uses must bear the copyright notice and/or be properly credited to the relevant photographer, as shown in the image metadata, and must be accompanied by a caption that makes reference to Fragile Planet Wildlife Park. Any uses in which the image and/or video appears without proper mention of Fragile Planet Wildlife Park are subject to paid licensing." : "Todos los usos de imágenes y/o vídeos deben llevar el aviso de derechos de autor y/o estar debidamente acreditados al fotógrafo correspondiente, como se muestra en los metadatos de la imagen, y deben ir acompañados de un pie de foto que haga referencia a Fragile Planet Wildlife Park. Cualquier uso en el que aparezca la imagen y/o el vídeo sin la debida mención a Fragile Planet Wildlife Park estará sujeto al pago de una licencia."}
                </p>
            </section>
        </main>
    );
};