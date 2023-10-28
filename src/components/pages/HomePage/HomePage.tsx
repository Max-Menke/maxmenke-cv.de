import { MainFullFrame, ProfileInfo, FullSizeTimeline } from "../../elements";
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
                <p>Hallo 3</p>
                <p>Hallo 4</p>
                <p>Hallo 5</p>
            </MainFullFrame>
        </div>
    );
}

export default HomePage;
