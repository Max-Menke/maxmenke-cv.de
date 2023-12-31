import { useState } from "react";
import { MainFullFrame, Header, ProfileInfo, FullSizeTimeline, SkillsInfo, ProjectInfo } from "../../elements";
import "./HomePage.scss";

function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Header
                menu={[
                    { name: "Welcome", icon: "home" },
                    { name: "Timeline", icon: "schedule" },
                    { name: "Skills", icon: "build" },
                    { name: "Projects", icon: "language" },
                ]}
                subMenu={[{ title: "LinkedIn", link: "" }]}
                activeIndex={activeIndex}
                setActiveIndex={(index) => {
                    setActiveIndex(index);
                }}
            />
            <MainFullFrame
                headlines={["Welcome", "Timeline", "Skills", "Projects", "Contact"]}
                className="Main"
                activeIndex={activeIndex}
                setActiveIndex={(index) => {
                    setActiveIndex(index);
                }}
            >
                <ProfileInfo
                    name="Max Menke"
                    jobTitle="Webentwickler"
                    imgURL="/src/assets/img/Max-Menke.png"
                    imgAlt=""
                />
                <FullSizeTimeline
                    timeline={[
                        { date: 2340, titel: "Mein Titel 1", text: "Einige Beschreibung hier.", ref: "1" },
                        { date: 2340, titel: "Mein Titel 2", text: "Einige Beschreibung hier.", ref: "2" },
                        { date: 2340, titel: "Mein Titel 3", text: "Einige Beschreibung hier.", ref: "3" },
                        { date: 2340, titel: "Mein Titel 4", text: "Einige Beschreibung hier.", ref: "4" },
                        { date: 2340, titel: "Mein Titel 5", text: "Einige Beschreibung hier.", ref: "5" },
                        { date: 2340, titel: "Mein Titel 6", text: "Einige Beschreibung hier.", ref: "6" },
                    ]}
                />
                <SkillsInfo
                    softSkills={[
                        {
                            titel: "Designaffin",
                            text: "Hier steht jetzt irgendein Text der Text beschreibt die eigenschft",
                        },
                        {
                            titel: "Autodidakt",
                            text: "Hier steht jetzt irgendein Text der Text  die eigenschft",
                        },
                        {
                            titel: "Team Player",
                            text: "Hier  jetzt  Text der Text beschreibt die eigenschft",
                        },
                        {
                            titel: "Projektorientiert",
                            text: "Hier  jetzt irgendein Text der Text beschreibt die ",
                        },
                    ]}
                    icons={[
                        { name: "HTML", url: "/src/assets/img/icons/html5", alt: "" },
                        { name: "CSS", url: "/src/assets/img/icons/css3", alt: "" },
                        { name: "SASS", url: "/src/assets/img/icons/sass", alt: "" },
                        { name: "JAVASCRIPT", url: "/src/assets/img/icons/javascript", alt: "" },
                        { name: "TYPOSKRIPT", url: "/src/assets/img/icons/typoskript", alt: "" },
                        { name: "REACT", url: "/src/assets/img/icons/react", alt: "" },
                        { name: "WORDPRESS", url: "/src/assets/img/icons/wordpress", alt: "" },
                        { name: "GIT", url: "/src/assets/img/icons/git", alt: "" },
                        { name: "DOCKER", url: "/src/assets/img/icons/docker", alt: "" },
                        { name: "WEB-PACK", url: "/src/assets/img/icons/webpack", alt: "" },
                    ]}
                />
                <ProjectInfo
                    category={[
                        {
                            name: "Wordpress",
                            projects: [
                                {
                                    titel: "imagedepartment.de",
                                    descriptionOne: "Fotografen Portfolio Website",
                                    descriptionTwo: "Entwiklung eines Costum Wordpress theams",
                                    imgURL: "/src/assets/img/Imagedepartment.png",
                                    imgAlt: "",
                                    webLink: "test",
                                    GitLink: "test",
                                },
                            ],
                        },
                        {
                            name: "React",
                            projects: [
                                {
                                    titel: "maxmenke-cv.de",
                                    descriptionOne: "Meine eigene Lebenslauf Webpage",
                                    descriptionTwo: "Entwiklung einer React App",
                                    imgURL: "",
                                    imgAlt: "",
                                    GitLink: "test",
                                },
                            ],
                        },
                    ]}
                />
            </MainFullFrame>
        </>
    );
}

export default HomePage;
