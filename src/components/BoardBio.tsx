import DOMPurify from 'dompurify';

const BoardBio = (props: { name: string, bio: string, image: string }) => {
    return (
        <div className="row">

            <div className="col-sm-3  text-center">
                <img className="img-fluid rounded team-img" src={props.image} alt={props.name} />
            </div>
            <div className="col-sm-9">
                <p className="text-justify">
                    <strong>{props.name}</strong> <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.bio) }}></span>
                </p>


            </div>

        </div>
    )
}

export default BoardBio;