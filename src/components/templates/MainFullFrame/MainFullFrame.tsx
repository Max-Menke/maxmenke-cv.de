import React, { ReactNode, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./MainFullFrame.scss";

interface Props {
    children: ReactNode;
    headlines: string[];
}

const MainFullFrame = ({ children, headlines }: Props) => {
    const childrenArray = React.Children.toArray(children);
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.95,
        };

        let callback = (entries: IntersectionObserverEntry[]) => {
            let targetElement: HTMLElement = entries[0].target as HTMLElement;
            let index = parseInt(targetElement.getAttribute("data-index") || "-1", 10);
            let visiblePct = Math.floor(entries[0].intersectionRatio * 100);

            if (visiblePct >= 95) {
                setCurrentSection(index);
            }
        };

        let observer = new IntersectionObserver(callback, options);
        let targets = document.querySelectorAll('[data-id="MainFullFrame-Section"]');

        Array.from(targets).forEach((target) => {
            observer.observe(target);
        });

        return () => {
            observer.disconnect();
        };
    });

    return (
        <main className="MainFullFrame-Layout">
            <div className="MainFullFrame-Layout__Headline">
                <TypeAnimation
                    key={currentSection}
                    cursor={false}
                    sequence={[`${headlines[currentSection]}`, 10, () => {}]}
                    speed={15}
                    wrapper="h1"
                    className={`MainFullFrame-Headline`}
                />
            </div>
            <div className="MainFullFrame-Layout__Content">
                {childrenArray.map((child, index) => (
                    <section
                        key={index}
                        data-id={"MainFullFrame-Section"}
                        data-index={index}
                        className="MainFullFrame-Section"
                    >
                        {child}
                    </section>
                ))}
                <div className="MainFullFrame-Section__Content--space"></div>
            </div>
        </main>
    );
};

export default MainFullFrame;
