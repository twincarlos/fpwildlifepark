import PrimaryButton from "@/app/(components)/(PrimaryButton)/PrimaryButton";

export function HomeComponent1({language}) {
    return (
        <section className="home-component home-component-1">
            <div className="container">
                <div className="text-box">
                    <p>{language === "English" ? "Explore animals like never before!" : ""}</p>
                </div>
                <div className="button-box">
                    <PrimaryButton text={language === "English" ? "Book your Tour" : ""} path="/tours"/>
                </div>
            </div>
        </section>
    );
};