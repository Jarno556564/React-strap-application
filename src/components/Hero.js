function Hero({ bg_image, h_title, h_text, overlay_position }) {
    return (
        <>
            <div className="card">
                <img src={bg_image} className="card-img" alt="hero image" />
                <div className="card-img-overlay">
                    <div className={overlay_position}>
                        <h5 className="card-title fs-1">{h_title}</h5>
                        <p className="card-text fs-5">{h_text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
