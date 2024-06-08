import {Image} from "./Image";

export const Gallery = (props) => {
    return (
        <div id={"portfolio"} className={"text-center"}>
            <div className="container">
                <div className="section-title">
                    <h2>Gallery</h2>
                    <p>{props.data ? props.data.paragraph : "loading..."}</p>
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        {props.data ? props.data.images.map((d, i) => (
                            <div className={"col-sm-6 col-md-4 col-lg-4"} key={`${d.title}-${i}`}>
                                <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage}/>
                            </div>
                        )) : "loading..."}
                    </div>
                </div>
            </div>
        </div>
    )
}