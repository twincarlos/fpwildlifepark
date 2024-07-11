import "../About.css";
import Image from "next/image";
import employee1 from "../../(assets)/EMPLOYEES-1.png";
import employee3 from "../../(assets)/EMPLOYEES-3.png";
import employee4 from "../../(assets)/EMPLOYEES-4.png";
import employee5 from "../../(assets)/EMPLOYEES-5.png";
import employee6 from "../../(assets)/EMPLOYEES-6.png"

export default function OurTeam() {
    return (
        <main className="our-team">
            <section className="about-header our-team-header">
                <h2>Meet our team</h2>
            </section>
            <section className="about-body">
                <div className="about-content">
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee1} />
                        <p className="employee-name">Sam Wolfer</p>
                        <p className="employee-title">Animal Care Manager</p>
                    </div>
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee3} />
                        <p className="employee-name">Jose Elizondo</p>
                        <p className="employee-title">Safari Guide</p>
                    </div>
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee4} />
                        <p className="employee-name">Jorge Garcia</p>
                        <p className="employee-title">Lead Educator</p>
                    </div>
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee5} />
                        <p className="employee-name">Daryela Hernandez</p>
                        <p className="employee-title">Executive Assistant</p>
                    </div>
                    <div className="team-member">
                        <Image className="employee-img" alt="employee" src={employee6} />
                        <p className="employee-name">Cindy Torres</p>
                        <p className="employee-title">Office Manager</p>
                    </div>
                </div>
            </section>
        </main>
    );
};