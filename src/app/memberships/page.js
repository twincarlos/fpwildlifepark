"use client";
import "./Memberships.css";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import familyMembership from "../(assets)/family-membership.png";
import singleMembership from "../(assets)/single-membership.png";
import Link from "next/link";

export default function Memberships() {
    const { language } = useLanguage();
    return (
        <main className="memberships">
            <section className="memberships-header">
                <h2>{language === "English" ? "Memberships" : "Membresias"}</h2>
            </section>
            <section className="memberships-body">
                <div className="membership">
                    <Image className="memberships-img" alt="safari field trip" src={familyMembership} />
                    <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/570689/?full-items=yes&flow=no">{language === "English" ? "Family Membership" : "Membresia Familiar"}</Link>
                </div>
                <div className="membership">
                    <Image className="memberships-img" alt="field trip details" src={singleMembership} />
                    <Link href="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/570306/?full-items=yes&flow=no" target="_blank">{language === "English" ? "Individual Membership" : "Membresia Individual"}</Link>
                </div>
            </section>
        </main>
    );
};