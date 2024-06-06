import PrimaryButton from "@/app/(components)/(PrimaryButton)/PrimaryButton";

export function HomeComponent1() {
    return (
        <section className="home-component home-component-1">
            <div className="container">
                <div className="text-box">
                    <p>Explore the wonders of nature in our sanctuary of conservation.</p>
                </div>
                <div className="button-box">
                    <PrimaryButton text="Learn more" path="/"/>
                </div>
            </div>
        </section>
    );
};