function Card({
    title = null,
    text,
    image = null,
    imageAlt = null,
    actions = null,
    card_styling = null
}) {
    return (
        <div className={`card ${card_styling}`}>
            {image && <img className='card-img-top' src={image} alt={imageAlt || 'no alt given'} />}
            {/* {icon && } */}
            <div className='card-body text-center'>
                {title && <div className='card-title'><h5>{title}</h5></div>}
                <div className="card-text">{text}</div>
                {actions}
            </div>
        </div>
    )
}

export default Card;