"use client";
import "./HiddenModal.css";
import { useEffect } from "react";
import { useModal, setShowModal } from "@/app/context/ModalContext";
import Modal from "../Modal/Modal";
import Image from "next/image";
import christmasEvent from "../../(assets)/christmas-event.jpeg";
import Link from "next/link";

export default function HiddenModal() {
    const {setShowModal} = useModal();
    useEffect(() => {
        const modalPopup = setTimeout(() => setShowModal(true), 10000);
        return () => clearInterval(modalPopup);
    }, []);
    return (
        <Modal>
            <Image alt="christmas event" src={christmasEvent} />
            <Link onClick={() => setShowModal(false)} style={{ width: "fit-content", padding: "1em" }} href={"/events"}>
                <div style={{ fontSize: "1em" }} className="book-tour-text">Book your ticket</div>
            </Link>
        </Modal>
    );
};
