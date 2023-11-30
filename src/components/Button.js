function Button({ href, variant = 'primary', text }) {
    return (
        <a href={href} className={`btn btn-${variant} text-light`}>{text}</a>
    );
}

export default Button;
