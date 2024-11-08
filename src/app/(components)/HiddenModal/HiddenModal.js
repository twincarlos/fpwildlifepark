"use client";
import "./HiddenModal.css";
import { useEffect } from "react";
import { useModal } from "@/app/context/ModalContext";
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
            <Link href={"https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/570281/?full-items=yes&flow=no"}>
                <div className="book-tour-text">Book Tour</div>
            </Link>
        </Modal>
    );
};