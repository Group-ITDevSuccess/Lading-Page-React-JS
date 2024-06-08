export const Services = (props) => {
    return (
        <div id={"services"} className={"text-center"}>
            <div className="container">
                <div className="section-title">
                    <h2>Ours Services</h2>
                    <p>{props.data ? props.data.paragraph : "loading..."}</p>
                </div>
                <div className="row">
                    {props.data ? props.data.lists.map((d, i) => (
                        <div className={"col-md-4"} key={`${d.name}-${i}`}>
                            {" "}
                            <i className={d.icon}></i>
                            <div className="service-desc">
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                            </div>
                        </div>
                    )) : "loading ..."}
                </div>
            </div>
        </div>
    )
}