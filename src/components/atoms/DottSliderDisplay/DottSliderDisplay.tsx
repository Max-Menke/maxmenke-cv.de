import { forwardRef, ForwardedRef, useState } from "react";

import { activeClass } from "../../../utilities/UTLF";
import "./DottSliderDisplay.scss";

interface Props {
    onItemSelect?: (index: number) => void;
    elementNumber: number;
    activeItem: number;
    [x: string]: any;
}

const DottSliderDisplay = forwardRef(
    ({ onItemSelect, activeItem, elementNumber, ...props }: Props, ref: ForwardedRef<any>) => {
        const [activeIndex, setActiveIndex] = useState(activeItem);
        const elements = [];

        for (let index = 0; index < elementNumber; index++) {
            let element = (
                <div
                    key={index}
                    className={activeClass("DottSliderDisplay__dottCenter", index === activeIndex)}
                    onClick={() => {
                        setActiveIndex(index);
                        if (!onItemSelect) {
                            return;
                        }
                        onItemSelect(index);
                    }}
                ></div>
            );

            elements.push(element);
        }

        return (
            <div ref={ref} className="DottSliderDisplay" {...props}>
                {elements}
            </div>
        );
    }
);

export default DottSliderDisplay;
