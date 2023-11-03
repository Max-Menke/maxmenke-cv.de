import React from "react";

import { activeClass } from "../../../utilities/UTLF";
import "./LoadingButton.scss";

interface Props {
    title: string;
    active: boolean;
    onClick: () => void;
}

const LoadingButton = ({ onClick, title, active }: Props) => {
    return (
        <button className={activeClass("LoadingButton", active)} onClick={onClick}>
            {title}
        </button>
    );
};

export default LoadingButton;
