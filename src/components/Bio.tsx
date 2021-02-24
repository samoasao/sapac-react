import { FunctionComponent } from "react";

type BioProps = {
  name: string;
  image: string;
};

const Bio: FunctionComponent<BioProps> = ({ name, image, children }) => {
  return (
    <div className="">
      <div className="row container-fluid d-flex h-100">
        <div className="col-sm-4 justify-content-center align-self-center">
          <img className="img-fluid rounded team-img" src={image} alt={name} />
        </div>
        <div className="col-sm-8 justify-content-center align-self-center">
          <p className="text-justify ">
            <strong>{name}</strong> &nbsp;
            <span>{children}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
