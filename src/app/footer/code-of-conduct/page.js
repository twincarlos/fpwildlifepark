import "../Footer.css";

export default function CodeOfConduct() {
    return (
        <main>
            <section className="page-header code-of-conduct-header">
                <h2>
                    {language === "English" ? "Fragile Planet Wildlife Park Code of Conduct" : ""}
                </h2>
            </section>
            <section className="page-content">
                <p>
                    {language === "English" ? "Fragile Planet Wildlife Park is dedicated to providing a safe and enjoyable experience for all guests, while ensuring the well-being of our animals and the park itself. To achieve this, we kindly ask all visitors to adhere to the following code of conduct:" : "Spanish"}
                </p>
                <strong>
                    {language === "English" ? "Dress Code:" : ""}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- We encourage guests to dress appropriately for the outdoors." : ""}
                    </p>
                    <p>
                        {"- Closed-toed shoes with good tread are required for everyone's safety on uneven terrain."}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "Animal Interactions:" : ""}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- The safety of our animals and guests is our top priority." : ""}
                    </p>
                    <p>
                       {language === "English" ? " - Please follow all instructions provided by our staff regarding animal interactions." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- This includes maintaining a safe distance, not feeding animals unauthorized items, and  refraining from loud noises or aggressive behavior." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- Staff reserves the right to remove guests who disregard safety protocols and put themselves or the animals at risk." : ""}
                    </p>
                </div>
                <strong>
                   {language === "English" ? " Respecting the Park:" : ""}
                </strong>
                <div>
                    <p>
                        {language === "English" ? "- Fragile Planet Wildlife Park is committed to providing a clean and welcoming environment for all." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- Please refrain from littering, vandalism, or any other behavior that could damage park property." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- Guests responsible for damaging park property will be held financially responsible for repairs or replacements." : ""}
                    </p>
                    <p>
                        {language === "English" ? "- Staff reserves the right to remove guests who intentionally damage or misuse park facilities." : ""}
                    </p>
                </div>
                <strong>
                    {language === "English" ? "General Conduct:" : ""}
                </strong>
                <p>
                    {language === "English" ? "- We ask all guests to be courteous and respectful towards other visitors and staff members." : ""}
                </p>
                <p>
                    {language === "English" ? "- Profanity, disorderly conduct, or disruptive behavior will not be tolerated" : ""}
                </p>
                <strong>
                    {language === "English" ? "Thank you for cooperating and helping us create a positive experience for everyone!" : ""}
                </strong>
            </section>
        </main>
    );
};