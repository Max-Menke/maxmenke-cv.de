import React, { ReactNode, useEffect, useState, useRef } from "react";
import { BurgerMenu, MaterialIconButton, CollorChangeButtonLink } from "../../elements";
import "./Header.scss";

interface menu {
    name: string;
    icon: string;
}

interface subMenu {
    title: string;
    link: string;
}

interface Props {
    menu: menu[];
    subMenu: subMenu[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const Header = ({ subMenu, menu, activeIndex, setActiveIndex }: Props) => {
    const [menuWidth, setMenuWidth] = useState("6.5vh");
    const [menuState, setMenuState] = useState("");

    const handleMenuOpen = () => {
        setMenuState("open");
    };

    const handleMenuClose = () => {
        setMenuState("");
    };

    return (
        <header className={"Header " + menuState}>
            <div className={"Header__start " + menuState}>
                <BurgerMenu
                    className="Header__start--burgerMenu"
                    onClickOpen={handleMenuOpen}
                    onClickClose={handleMenuClose}
                />
            </div>
            <div className={"Header__second " + menuState}></div>
            <div className={"Header__third " + menuState}>
                <nav className="Header-menu">
                    {menu.map((child, index) => (
                        <MaterialIconButton
                            className={"Header-menu__item " + (index === activeIndex ? "active " : "") + menuState}
                            key={child.name}
                            buttonText={child.name}
                            iconName={child.icon}
                            onClick={() => {
                                setActiveIndex(index);
                            }}
                        />
                    ))}
                </nav>
            </div>
            <div className={"Header__fourth " + menuState}>
                <div className={"Header-subMenu "}>
                    {subMenu.map((element, index) => (
                        <CollorChangeButtonLink title={element.title} styling={2} link={element.link} />
                    ))}
                </div>
            </div>
            <div className={"Header__end " + menuState}>
                <MaterialIconButton
                    className={"Header__end--logIn " + menuState}
                    key={"login"}
                    buttonText="Login"
                    iconName="login"
                    link=""
                    onClick={() => {}}
                />
                <MaterialIconButton
                    className={"Header__end--impressum " + menuState}
                    key={"login"}
                    buttonText="Impressum"
                    iconName="ink_pen"
                    iconType={1}
                    link=""
                    onClick={() => {}}
                />
            </div>
        </header>
    );
};

export default Header;
