"use client";
import "./HiddenModal.css";
import { useEffect } from "react";
import { useModal } from "@/app/context/ModalContext";
import Modal from "../Modal/Modal";
import Image from "next/image";
import backpacksForKids from "../../(assets)/backpack-for-kids.png";

export default function HiddenModal() {
    const {setShowModal} = useModal();
    useEffect(() => {
        const modalPopup = setTimeout(() => setShowModal(true), 10000);
        return () => clearInterval(modalPopup);
    }, []);
    return (
        <Modal>
            <Image alt="reptile week modal" src={backpacksForKids} />
        </Modal>
    );
};