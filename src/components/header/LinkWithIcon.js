import { Link } from "react-router-dom"

const LinkWithIcon = ({ linkPath, imageSource, text }) =>
    <Link className='link-with-icon' to={linkPath}>
        <img alt={text} src={imageSource} />
        {text}
    </Link>

export default LinkWithIcon