import { useState, useRef } from "react";
import { HorizontalSlider, TimelineElement } from "../../elements";
import { activeClass } from "../../../utilities/UTLF";

import "./FullSizeTimeline.scss";

interface timeline {
    date: number;
    titel: string;
    text: string;
    ref: string;
}

interface Props {
    timeline: timeline[];
}

const FullSizeTimeline = ({ timeline }: Props) => {
    const itemRef = Array.from({ length: timeline.length }).map(() => useRef<HTMLDivElement>(null));

    const [activeIndex, setActiveIndex] = useState(0);

    //const scrollDiv = useRef<HTMLDivElement | null>(null);

    return (
        <article className="FullSizeTimeline">
            <HorizontalSlider
                draggable={true}
                //ref={scrollDiv}
                onItemSelect={(index: number) => {
                    setActiveIndex(index);
                }}
            >
                {timeline.map((element, index) => (
                    <section
                        key={index}
                        ref={itemRef[index]}
                        className={activeClass("FullSizeTimeline__section", index === activeIndex)}
                    >
                        <TimelineElement
                            key={activeIndex}
                            index={index}
                            elementNumber={timeline.length}
                            active={index === activeIndex}
                            date={element.date}
                            titel={element.titel}
                            text={element.text}
                        />
                    </section>
                ))}
            </HorizontalSlider>
        </article>
    );
};

export default FullSizeTimeline;
