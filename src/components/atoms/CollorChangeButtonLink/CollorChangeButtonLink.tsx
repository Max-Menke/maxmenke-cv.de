import React from 'react';
import "./CollorChangeButtonLink.scss";

interface Props {
    title: string;
    styling: number;
    link: string;
}

const CollorChangeButtonLink: React.FC<Props> = ({ title, styling, link }) => {
    const openLink = () => {
        window.open(link, '_blank');
    };

    const buttonClass = `CollorChangeButtonLink styling-${styling}`;

    return (
        <button className={buttonClass} onClick={openLink}>
            {title}
        </button>
    );
};

export default CollorChangeButtonLink;
