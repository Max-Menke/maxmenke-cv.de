import { MainFullFrame, ProfileInfo, FullSizeTimeline, SkillsInfo } from "../../elements";
import "./HomePage.scss";

function HomePage() {
    return (
        <div className="HomePage">
            <MainFullFrame headlines={["Welcome", "Timeline", "Skills", "Projects", "Contact"]}>
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
                <p>Hallo 4</p>
                <p>Hallo 5</p>
            </MainFullFrame>
        </div>
    );
}

export default HomePage;
