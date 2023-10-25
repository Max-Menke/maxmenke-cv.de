import { MainFullFrame } from "../../elements";
import "./HomePage.scss";

function HomePage() {
    return (
        <div className="HomePage">
            <MainFullFrame headlines={["test1", "test2", "test3"]}>
                <p>Hallo 1</p>
                <p>Hallo 2</p>
                <p>Hallo 3</p>
            </MainFullFrame>
        </div>
    );
}

export default HomePage;
