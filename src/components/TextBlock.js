function TextBlock({ image, imageAlt, styling, title, text }) {
    return (
        <div className={`container-fluid ${styling}`}>
            {image && <img className='img-fluid' src={image} alt={imageAlt || 'no alt given'} />}
            <div className='mx-5'>
                {title && <div className=''><h5>{title}</h5></div>}
                <div className="">{text}</div>
            </div>
        </div>
    )
}

export default TextBlock;