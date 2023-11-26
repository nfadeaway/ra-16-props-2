import { ReactElement } from "react";
import Star from "./Star.tsx";

const Stars = ({count= 0}): ReactElement  => {

    let stars: ReactElement[] = [];

    if (count > 0 && count < 6) {
        for (let i= 0; i < count; i++) {
            stars.push(<li key={i}><Star/></li>);
        }
    } else {
        return (<></>);
    }

    return (
        <ul className="card-body-stars">
            {stars.map(item => item)}
        </ul>
    );
};

export default Stars;