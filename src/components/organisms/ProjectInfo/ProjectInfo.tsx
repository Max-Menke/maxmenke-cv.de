import React, { forwardRef, ForwardedRef, useState, useRef, ReactNode } from "react";

import "./ProjectInfo.scss";

import { LoadingButton, CollorChangeButtonLink } from "../../elements";

interface Category {
    name: string;
    projects: ProjectInfo[];
}

interface ProjectInfo {
    titel: string;
    descriptionOne: string;
    descriptionTwo: string;
    imgURL: string;
    imgAlt: string;
    webLink?: string;
    GitLink?: string;
}

interface Props {
    category: Category[];
}

const ProjectInfo = ({ category }: Props) => {
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className="ProjectInfo">
            <div className="ProjectInfo__start">
                <div className="ProjectInfo__start--wrapper">
                    {category.map((element, index) => (
                        <>
                            <div
                                key={"category-projects" + index}
                                className="ProjectInfo-Projects"
                                style={{
                                    opacity: activeCategory === index ? 1 : 0,
                                    zIndex: activeCategory === index ? 1 : 0,
                                }}
                            >
                                {element.projects.map((element, index) => (
                                    <>
                                        <div key={"category-projects-element" + index} className="ProjectInfo-Project">
                                            <div className="ProjectInfo-Project__head">
                                                <div className="ProjectInfo-Project__head--img">
                                                    <img className="" src={element.imgURL} alt={""} />
                                                </div>
                                                <div className="ProjectInfo-Project__head--descriptionTwo">
                                                    <h4>{element.descriptionTwo}</h4>
                                                </div>
                                            </div>
                                            <div className="ProjectInfo-Project__description">
                                                <div className="ProjectInfo-Project__description--titel">
                                                    <h3>{element.titel}</h3>
                                                </div>
                                                <div className="ProjectInfo-Project__description--descriptionOne">
                                                    <h4>{element.descriptionOne}</h4>
                                                </div>
                                            </div>
                                            <div className="ProjectInfo-Project__links">
                                                {element.webLink && (
                                                    <CollorChangeButtonLink
                                                        title="Webseite"
                                                        styling={0}
                                                        link={element.webLink}
                                                    />
                                                )}
                                                {element.GitLink && (
                                                    <CollorChangeButtonLink
                                                        title="GitHub"
                                                        styling={1}
                                                        link={element.GitLink}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="ProjectInfo__end">
                <div className="ProjectInfo__end--wrapper">
                    {category.map((element, index) => (
                        <>
                            <LoadingButton
                                key={"category-buttons" + index}
                                title={element.name}
                                active={activeCategory === index}
                                onClick={() => {
                                    setActiveCategory(index);
                                }}
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
