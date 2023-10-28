import "./TimelineElement.scss";

import { activeClass } from "../../../utilities/UTLF";

interface Props {
    index: number;
    elementNumber: number;
    active: boolean;
    date: number;
    titel: string;
    text: string;
}

const TimelineElement = ({ index, elementNumber, active, date, titel, text }: Props) => {
    return (
        <div className="TimelineElement">
            <p className={activeClass("TimelineElement-Number", active)}>
                <span>{date.toString().substr(0, 2)}</span>
                <span>{date.toString().substr(2)}</span>
            </p>
            <div
                className={
                    index + 1 === elementNumber
                        ? "TimelineElement__overlay-last"
                        : index + 1 > elementNumber / 2
                        ? "TimelineElement__overlay-left"
                        : "TimelineElement__overlay-right"
                }
            >
                <div className={activeClass("TimelineElement-Info", active)}>
                    <h2>{titel}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default TimelineElement;
