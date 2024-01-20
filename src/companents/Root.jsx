import Header from "./Header";
import Intro from "./Intro/Intro";
import Service from "./Service";
import Works from "./Works";

const Root = () => {
    return (
        <div className="root">
            <Header />
            <Intro />
            <Service />
            <Works />
        </div>
    );
};
export default Root;
