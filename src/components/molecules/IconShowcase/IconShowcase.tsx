import  {  useState } from "react";
import { ColorChangeSVG, GridHorizontalSlider } from "../../elements";
import "./IconShowcase.scss";

interface icons {
    name: string;
    url: string;
    alt: string;
}

interface Props {
    icons: icons[];
}

const IconShowcase = ({ icons }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="IconShowcase">
            <div className="IconShowcase__headline">
                <h3>{icons[activeIndex].name}</h3>
            </div>
            <GridHorizontalSlider
                draggable={true}
                className="IconShowcase__grid"
                onItemSelect={(index: number) => {
                    setActiveIndex(index);
                }}
            >
                {icons.map((element, index) => (
                    <ColorChangeSVG
                        key={activeIndex}
                        url={element.url}
                        alt={element.alt}
                        changeExt="-color"
                        active={activeIndex === index}
                    />
                ))}
            </GridHorizontalSlider>
        </div>
    );
};

export default IconShowcase;
