import { introData } from "../../utils/data";
import YoutubeIcon from "../../assets/image/youtubeIcon.svg"
const Intro = () => {
    return (
        <div className='intro container'>
            <div className='intro__info'>
                <h1 className='intro__title'>{introData.title}</h1>
                <p className='intro__text'>{introData.text}</p>
                <button className='btn'>Xizmatlar bilan tanishish</button>
            </div>
            <div className="intro__img">
                <img src={YoutubeIcon} alt="svg" className="icon"/>
                <img src={introData.img} alt={introData.title} />
            </div>
        </div>
    );
};

export default Intro;
