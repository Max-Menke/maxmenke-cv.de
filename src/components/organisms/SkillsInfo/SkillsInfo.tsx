import "./SkillsInfo.scss";

import { IconShowcase, EndlessSliderVertical } from "../../elements";

interface icons {
    name: string;
    url: string;
    alt: string;
}

interface softSkills {
    titel: string;
    text: string;
}

interface Props {
    softSkills: softSkills[];
    icons: icons[];
}

const SkillsInfo = ({ softSkills, icons }: Props) => {
    return (
        <div className="SkillsInfo">
            <div className="SkillsInfo__start">
                <EndlessSliderVertical items={softSkills} />
            </div>
            <div className="SkillsInfo__end">
                <IconShowcase icons={icons} />
            </div>
        </div>
    );
};

export default SkillsInfo;
