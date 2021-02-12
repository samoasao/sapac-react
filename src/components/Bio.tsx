import { FunctionComponent } from 'react';

type BioProps = {
    name: string,
    image: string
}

const Bio: FunctionComponent<BioProps> = ({ name, image, children }) => {
    return (
        <div className="row">

            <div className="col-sm-3  text-center">
                <img className="img-fluid rounded team-img" src={image} alt={name} />
            </div>
            <div className="col-sm-9">
                <p className="text-justify">
                    <strong>{name}</strong> &nbsp;
                    <span>{children}</span>
                </p>
            </div>
        </div>
    )
}

export default Bio;