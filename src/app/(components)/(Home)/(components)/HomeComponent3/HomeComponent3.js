import Link from "next/link";

export function HomeComponent3({language}) {
    return (
        <section className="home-component home-component-3">
            <div className="container">
                <div className="container-row">
                    <div className="container-cell main-cell">
                        <div className="component-header">
                            <h2>{language === "English" ? "News & Resources" : "Noticias y Recursos"}</h2>
                        </div>
                        <div className="component-description">
                            <p>{language === "English" ? "Stay informed and engaged with the latest from Fragile Planet Wildlife Park. Our News & Resources section is your go-to source for comprehensive updates and valuable information." : "Mantente informado y participa con las últimas noticias del Parque Faunístico Planeta Frágil. Nuestra sección de noticias y recursos es la fuente de información más completa y valiosa."}</p>
                        </div>
                    </div>
                    <div className="container-cell cell-2">
                        <div className="cell-description">
                            <p>{language === "English" ? "Our Animals" : "Nuestros Animales"}</p>
                        </div>
                        <Link href="/about/our-animals" className="cell-image">
                            <p>
                                {language === "English" ? "Explore detailed profiles and fascinating facts about the diverse species of animals and plants at our park. Learn about their habitats, behaviors, and the conservation efforts dedicated to their protection." : "Explore perfiles detallados y datos fascinantes sobre las diversas especies de animales y plantas de nuestro parque. Conozca sus hábitats, comportamientos y los esfuerzos de conservación dedicados a su protección."}
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="container-row">
                    <div className="container-cell cell-3">
                        <div className="cell-description">
                            <p>{language === "English" ? "Education" : "Educacion"}</p>
                        </div>
                        <Link href="/about/education" className="cell-image">
                            <p>
                                {language === "English" ? "Access a wealth of educational materials designed for all ages. From interactive lessons and activities to in-depth articles and videos, our resources aim to inspire and educate the next generation of wildlife advocates." : "Acceda a una gran cantidad de materiales educativos diseñados para todas las edades. Desde lecciones y actividades interactivas hasta artículos y vídeos exhaustivos, nuestros recursos pretenden inspirar y educar a la próxima generación de defensores de la vida salvaje."}
                            </p>
                        </Link>
                    </div>
                    <div className="container-cell cell-4">
                        <div className="cell-description">
                            <p>{language === "English" ? "News & Events" : "Noticias y Eventos"}</p>
                        </div>
                        <Link href="/events" className="cell-image">
                            <p>
                                {language === "English" ? "Keep up with the latest news and upcoming events at Fragile Planet Wildlife Park. Discover exciting announcements, special programs, and opportunities to get involved in our conservation initiatives." : "Mantente al día de las últimas noticias y los próximos eventos del Parque Faunístico Planeta Frágil. Descubre anuncios interesantes, programas especiales y oportunidades para participar en nuestras iniciativas de conservación."}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};