import { GatsbyImage } from 'gatsby-plugin-image'

const SocialMediaThumbnail = (props) => {
    return (
        <a href={props.href} target="_blank">
            <div className={props.className} >
                <GatsbyImage image={props.image} alt={props.alt} />
            </div>
        </a>
    )
}

export default SocialMediaThumbnail