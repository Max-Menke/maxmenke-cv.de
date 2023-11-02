import "./ColorChangeSVG.scss";

import { activeClass } from "../../../utilities/UTLF";

interface Props {
    url: string;
    alt: string;
    changeExt: string;
    active: boolean;
}

const ColorChangeSVG = ({ url, alt, changeExt, active }: Props) => {
    return (
        <div className="ColorChangeSVG">
            <img className="ColorChangeSVG__icon" src={url + ".svg"} alt={alt} />
            <img className={activeClass("ColorChangeSVG__iconExt", active)} src={url + changeExt + ".svg"} alt={alt} />
        </div>
    );
};

export default ColorChangeSVG;
