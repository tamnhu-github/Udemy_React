import viddeoHomepage from '../../assets/video-homepage.webm';
const Homepage = (props) => {
    return(
        <video autoPlay muted loop>
            <source 
                src={viddeoHomepage} 
                type="video/mp4"
            />
        </video>
    )
}
export default Homepage;