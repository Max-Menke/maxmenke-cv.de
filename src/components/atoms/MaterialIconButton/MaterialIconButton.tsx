import "./MaterialIconButton.scss";

interface Props {
    buttonText: string;
    iconName: string;
    iconType?: number;
    className?: string;
    link?: string;
    linkOpen?: string;
    onClick: () => void;
}

const MaterialIconButton = ({ link, linkOpen, iconType, buttonText, iconName, className, onClick }: Props) => {
    const onClickIntern = () => {
        onClick();
        if (link !== undefined) {
            if (linkOpen === "blank") {
                window.open(link, "_blank");
            } else {
                window.location.href = link;
            }
        }
    };

    return (
        <button className={className + " MaterialIconButton"} onClick={onClickIntern}>
            {iconType === 1 ? (
                <span className="material-symbols-outlined">{iconName}</span>
            ) : (
                <span className="material-icons">{iconName}</span>
            )}
            <span className="MaterialIconButton__text">{buttonText}</span>
        </button>
    );
};

export default MaterialIconButton;
