import React, { useState } from "react";
import "./BurgerMenu.scss";

interface Props {
    className?: string;
    onClickOpen: () => void;
    onClickClose: () => void;
}
const BurgerMenu = ({ className, onClickOpen, onClickClose }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        if (isOpen) {
            onClickClose();
        } else {
            onClickOpen();
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className={className + ` burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
        </div>
    );
};

export default BurgerMenu;
