"use client";
import "./HiddenModal.css";
import { useEffect } from "react";
import { useModal } from "@/app/context/ModalContext";
import Modal from "../Modal/Modal";
import Image from "next/image";
import laborDayWeekendEnglish from "../../(assets)/labor-day-weekend-english.png";
import laborDayWeekendSpanish from "../../(assets)/labor-day-weekend-spanish.png";
import { useLanguage } from "@/app/context/LanguageContext";

export default function HiddenModal() {
    const {language} = useLanguage();
    const {setShowModal} = useModal();
    useEffect(() => {
        const modalPopup = setTimeout(() => setShowModal(true), 10000);
        return () => clearInterval(modalPopup);
    }, []);
    return (
        <Modal>
            <Image alt="reptile week modal" src={language === "English" ? laborDayWeekendEnglish : laborDayWeekendSpanish} />
        </Modal>
    );
};