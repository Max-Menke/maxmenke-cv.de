import React, { ReactNode, useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import "./MainFullFrame.scss";

interface Props {
    children: ReactNode;
    headlines: string[];
}

const MainFullFrame = ({ children, headlines }: Props) => {
    const childrenArray = React.Children.toArray(children);

    const [currentSection, setCurrentSection] = useState(0);

    const scrollDiv = useRef<HTMLDivElement | null>(null);
    const headlineDiv = useRef<HTMLDivElement | null>(null);
    const headline = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.80,
        };

        let callback = (entries: IntersectionObserverEntry[]) => {
            let targetElement: HTMLElement = entries[0].target as HTMLElement;
            let index = parseInt(targetElement.getAttribute("data-index") || "-1", 10);
            let visiblePct = Math.floor(entries[0].intersectionRatio * 100);

            if (visiblePct >= 80) {
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

    useEffect(() => {
        let scrollTimeoutHeadlineDiv: ReturnType<typeof setTimeout>;
        let scrollTimeoutHeadline: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            if (headlineDiv.current) {
                headlineDiv.current.style.zIndex = "100";
                clearTimeout(scrollTimeoutHeadlineDiv);
                scrollTimeoutHeadlineDiv = setTimeout(() => {
                    if (headlineDiv.current) {
                        headlineDiv.current.style.zIndex = "";
                    }
                }, 50);
            }

            if (headline.current) {
                headline.current.style.opacity = "1";
                clearTimeout(scrollTimeoutHeadline);
                scrollTimeoutHeadline = setTimeout(() => {
                    if (headline.current) {
                        headline.current.style.opacity = "";
                    }
                }, 50);
            }
        };

        const div = scrollDiv.current;
        if (div) {
            div.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (div) {
                div.removeEventListener("scroll", handleScroll);
            }
            clearTimeout(scrollTimeoutHeadlineDiv);
            clearTimeout(scrollTimeoutHeadline);
        };
    }, []);

    return (
        <main className="MainFullFrame-Layout">
            <div className="MainFullFrame-Layout__Headline" ref={headlineDiv}>
                <TypeAnimation
                    key={currentSection}
                    cursor={false}
                    sequence={[`${headlines[currentSection]}`, 10, () => {}]}
                    speed={15}
                    wrapper="h2"
                    className={`MainFullFrame-Headline`}
                    ref={headline}
                />
            </div>
            <div className="MainFullFrame-Layout__Content" ref={scrollDiv}>
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
            </div>
        </main>
    );
};

export default MainFullFrame;
