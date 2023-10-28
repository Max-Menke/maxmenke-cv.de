import React, { forwardRef, ForwardedRef, useState, useRef, ReactNode } from "react";

import { ExtendedDiv, DottSliderDisplay } from "../../elements";
import { slideTo, combineRefs } from "../../../utilities/UTLF";

import "./HorizontalSlider.scss";

interface Props {
    children: ReactNode;
    className?: string;
    draggable?: boolean;
    [x: string]: any;
    onItemSelect?: (index: number) => void;
}

const HorizontalSlider = forwardRef(
    ({ children, draggable, className, onItemSelect, ...props }: Props, ref: ForwardedRef<any>) => {
        const childrenArray = React.Children.toArray(children);
        const scrollDiv = useRef<HTMLDivElement | null>(null);
        const ClassName = className !== undefined ? className + " HorizontalSlider" : " HorizontalSlider";
        const [activeIndex, setActiveIndex] = useState(0);

        //==============================================================//

        const [isDragging, setIsDragging] = useState(false);
        const [startWalk, setStartWalk] = useState(0);
        const [start, setStart] = useState(0);

        const handleDrag = (e: React.MouseEvent) => {
            if (!draggable) return;
            if (!scrollDiv.current) return;

            switch (e.type) {
                case "mousedown":
                    setIsDragging(true);
                    setStartWalk(e.clientX);
                    setStart(scrollDiv.current.scrollLeft);
                    break;
                case "mouseup":
                    setIsDragging(false);
                    break;
                case "mousemove":
                    if (!isDragging) return;
                    e.preventDefault();
                    const walk = startWalk - e.clientX;
                    scrollDiv.current.scrollLeft = start + walk;
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
                    className="HorizontalSlider__content"
                    onMouseDown={handleDrag}
                    onMouseUp={handleDrag}
                    onMouseMove={handleDrag}
                    ref={combineRefs(scrollDiv, ref)}
                    {...props}
                >
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
                            className="HorizontalSlider__content--item"
                        >
                            {child}
                        </ExtendedDiv>
                    ))}
                </div>
                <div className="HorizontalSlider__overlay">
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

export default HorizontalSlider;
