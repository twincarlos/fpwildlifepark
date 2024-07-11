import "../About.css";
import animal1 from "../../(assets)/animal-1.png";
import animal2 from "../../(assets)/animal-2.png";
import animal3 from "../../(assets)/animal-3.png";
import animal4 from "../../(assets)/animal-4.png";
import animal5 from "../../(assets)/animal-5.png";
import animal6 from "../../(assets)/animal-6.png";
import animal7 from "../../(assets)/animal-7.png";
import animal8 from "../../(assets)/animal-8.png";
import animal9 from "../../(assets)/animal-9.png";
import animal10 from "../../(assets)/animal-10.png";
import animal11 from "../../(assets)/animal-11.png";
import Image from "next/image";

export default function AnimalsAndPlants() {
    return (
        <main className="our-animals">
            <section className="about-header our-animals-header">
                <h2>Our Animals</h2>
            </section>
            <section className="about-body">
                <div className="about-content">
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal1} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal2} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal3} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal4} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal5} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal6} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal7} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal8} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal9} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal10} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal11} />
                        <div className="animal-info">
                            <p className="animal-name">Animal Name</p>
                            <p className="animal-type">Animal Type</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};