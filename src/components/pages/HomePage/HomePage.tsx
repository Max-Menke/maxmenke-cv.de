import { MainFullFrame, ProfileInfo } from "../../elements";
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
                <p>Hallo 2</p>
                <p>Hallo 3</p>
                <p>Hallo 4</p>
                <p>Hallo 5</p>
            </MainFullFrame>
        </div>
    );
}

export default HomePage;
