import "./ProfileInfo.scss";

interface Props {
    name: string;
    jobTitle: string;
    imgURL: string;
    imgAlt: string;
}

const ProfileInfo = ({ name, jobTitle, imgURL, imgAlt }: Props) => {
    return (
        <>
            <div className="ProfileInfo-Layout">
                <div className="ProfileInfo-Layout__start">
                    <div className="ProfileInfo-Picture">
                        <div className="ProfileInfo-Picture__circle"></div>
                        <img className="ProfileInfo-Picture__img" src={imgURL} alt={imgAlt} />
                    </div>
                </div>

                <div className="ProfileInfo-Layout__end">
                    <div className="ProfileInfo-Text">
                        <h1 className="ProfileInfo-Text__name">{name}</h1>
                        <h3 className="ProfileInfo-Text__jobTitle">{jobTitle}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;
