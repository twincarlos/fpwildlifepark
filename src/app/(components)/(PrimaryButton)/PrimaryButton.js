import "./PrimaryButton.css";
import Link from "next/link";

export default function PrimaryButton({ text, path }) {
    return <Link className="primary-button" href={path}>{text}</Link>
};