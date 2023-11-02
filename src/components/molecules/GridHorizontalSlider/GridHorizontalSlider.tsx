import React, { forwardRef, ForwardedRef, useState, useRef, ReactNode } from "react";

import { ExtendedDiv, DottSliderDisplay } from "../../elements";
import { slideTo, combineRefs } from "../../../utilities/UTLF";

import "./GridHorizontalSlider.scss";

interface Props {
    children: ReactNode;
    className?: string;
    draggable?: boolean;
    [x: string]: any;
    onItemSelect?: (index: number) => void;
}

const GridGridHorizontalSlider = forwardRef(
    ({ children, draggable, className, onItemSelect, ...props }: Props, ref: ForwardedRef<any>) => {
        const childrenArray = React.Children.toArray(children);
        const scrollDiv = useRef<HTMLDivElement | null>(null);
        const ClassName = className !== undefined ? className + " GridHorizontalSlider" : " GridHorizontalSlider";
        const [activeIndex, setActiveIndex] = useState(0);

        //==============================================================//

        const [isDragging, setIsDragging] = useState(false);
        const [startX, setStartX] = useState(0);
        const [startY, setStartY] = useState(0);
        const [scrollLeftStart, setScrollLeftStart] = useState(0);
        const [scrollTopStart, setScrollTopStart] = useState(0);

        const handleDrag = (e: React.MouseEvent) => {
            if (!draggable) return;
            if (!scrollDiv.current) return;
            switch (e.type) {
                case "mousedown":
                    setIsDragging(true);
                    setStartX(e.clientX);
                    setStartY(e.clientY);
                    setScrollLeftStart(scrollDiv.current.scrollLeft);
                    setScrollTopStart(scrollDiv.current.scrollTop);
                    break;
                case "mouseup":
                    setIsDragging(false);
                    break;
                case "mousemove":
                    if (!isDragging) return;
                    e.preventDefault();

                    const walkX = startX - e.clientX;
                    const walkY = startY - e.clientY;

                    scrollDiv.current.scrollLeft = scrollLeftStart + walkX;
                    scrollDiv.current.scrollTop = scrollTopStart + walkY;
                    break;
                default:
                    break;
            }
        };

        //==============================================================//

        const itemRef = Array.from({ length: childrenArray.length }).map(() => useRef<HTMLDivElement>(null));

        const handleSlideTo = (index: number) => {
            let slider = scrollDiv.current;
            let item = itemRef[index].current;

            if (!item || !slider) {
                return;
            }

            slideTo(slider, item);
        };

        //==============================================================//

        return (
            <div className={ClassName}>
                <div
                    className="GridHorizontalSlider__content"
                    onMouseDown={handleDrag}
                    onMouseUp={handleDrag}
                    onMouseMove={handleDrag}
                    ref={combineRefs(scrollDiv, ref)}
                    {...props}
                >
                    {" "}
                    <div className="GridHorizontalSlider-grid">
                        {childrenArray.map((child, index) => (
                            <ExtendedDiv
                                key={index}
                                ref={itemRef[index]}
                                onShortClick={() => {
                                    handleSlideTo(index);
                                    setActiveIndex(index);
                                    if (!onItemSelect) {
                                        return;
                                    }
                                    onItemSelect(index);
                                }}
                                className="GridHorizontalSlider-grid__item"
                            >
                                {child}
                            </ExtendedDiv>
                        ))}
                    </div>
                </div>
                <div className="GridHorizontalSlider__display">
                    <DottSliderDisplay
                        key={activeIndex}
                        onItemSelect={(index: number) => {
                            handleSlideTo(index);
                            if (!onItemSelect) {
                                return;
                            }
                            onItemSelect(index);
                        }}
                        elementNumber={childrenArray.length}
                        activeItem={activeIndex}
                    />
                </div>
            </div>
        );
    }
);

export default GridGridHorizontalSlider;
