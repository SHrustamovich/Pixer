import { serviseData } from "../../utils/data";
import { shortTitle } from "../../utils/helpers";

const Service = () => {
    return (
        <div className='service container'>
            <h1 className='service__title'>{serviseData.title}</h1>
            <p className="service__text">{serviseData.text}</p>
            <div className="cards">
                {
                    serviseData.cards.map(item => (
                        <div className="card" key={item.id}>
                            <div className="card__img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3 className="card__title">{shortTitle(item.title)}</h3>
                            <p className="card__text">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default Service;
