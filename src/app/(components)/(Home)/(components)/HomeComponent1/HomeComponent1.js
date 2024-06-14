import PrimaryButton from "@/app/(components)/(PrimaryButton)/PrimaryButton";

export function HomeComponent1() {
    return (
        <section className="home-component home-component-1">
            <div className="container">
                <div className="text-box">
                    <p>Explore animals like never before!</p>
                </div>
                <div className="button-box">
                    <PrimaryButton text="Book your Tour" path="/tours"/>
                </div>
            </div>
        </section>
    );
};