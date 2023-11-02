import { useState, useRef, useEffect } from "react";
import { activeClass } from "../../../utilities/UTLF";
import "./EndlessSliderVertical.scss";

interface items {
    titel: string;
    text: string;
}

interface Props {
    items: items[];
}

const content = (element: items, active: boolean) => (
    <>
        <h3 className={activeClass("EndlessSliderVertical__wrapper--heading", active)}>{element.titel}</h3>
        <div className={activeClass("EndlessSliderVertical__wrapper--text", active)}>
            <p>{element.text}</p>
        </div>
    </>
);

const EndlessSliderVertical = ({ items }: Props) => {
    const itemsRef = Array.from({ length: items.length }).map(() => useRef<HTMLDivElement>(null));
    const [activeIndex, setActiveIndex] = useState(0);
    const [mainheight, setMainHeight] = useState<number | null>(null);
    const [aktiveHeight, setAktiveHeight] = useState<number | null>(null);
    let heightMatrix: { [key: number]: number[] } = {};

    const updateSizes = () => {
        const getElementHeightWithMarginAndPadding = (el: Element) => {
            const style = window.getComputedStyle(el);
            const height = parseFloat(style.height);
            const marginTop = parseFloat(style.marginTop);
            const marginBottom = parseFloat(style.marginBottom);
            const paddingTop = parseFloat(style.paddingTop);
            const paddingBottom = parseFloat(style.paddingBottom);
            return height + marginTop + marginBottom + paddingTop + paddingBottom;
        };

        const element = document.querySelector(".EndlessSliderVertical__wrapper");
        if (element) {
            setMainHeight(getElementHeightWithMarginAndPadding(element));
        }

        const aktivElement = document.querySelector(".EndlessSliderVertical__wrapper-active");
        if (aktivElement) {
            setAktiveHeight(getElementHeightWithMarginAndPadding(aktivElement));
        }
    };

    useEffect(() => {
        updateSizes();
        window.addEventListener("resize", updateSizes);
        return () => {
            window.removeEventListener("resize", updateSizes);
        };
    }, []);

    items.forEach((_, mainIndex) => {
        heightMatrix[mainIndex] = items.map((_, index) => {
            if (mainIndex === 0 || mainheight === null || aktiveHeight === null) {
                return 0;
            }

            const additionalHeight = index < mainIndex ? aktiveHeight - mainheight : 0;
            const baseHeight =
                index < mainIndex ? mainheight * (items.length - mainIndex) : mainheight * mainIndex * -1;

            return additionalHeight + baseHeight;
        });
    });

    //----------------------------------------------------//

    const handleItemClick = (mainIndex: number) => {
        itemsRef.forEach((element, index) => {
            let item = element.current;
            if (!item) {
                return;
            }
            const upAnimationsValue = heightMatrix[mainIndex][index];
            item.style.transform = `translateY(${upAnimationsValue}px)`;
        });

        setActiveIndex(mainIndex);
    };

    //----------------------------------------------------//

    return (
        <div className="EndlessSliderVertical">
            {items.map((element, index) => (
                <div
                    ref={itemsRef[index]}
                    className={activeClass(" EndlessSliderVertical__wrapper", index === activeIndex)}
                    onClick={() => handleItemClick(index)}
                >
                    {content(element, index === activeIndex)}
                </div>
            ))}
        </div>
    );
};

export default EndlessSliderVertical;
