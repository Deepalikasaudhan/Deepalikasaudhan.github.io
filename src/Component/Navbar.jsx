import './Navbar.css'
import Image3 from '../assets/Image3.jpg'


const Navbar = () =>{
    return(
        <div className="container">
            <div className="first-child">
                <img src={Image3} alt="" />
            </div>
            <div className="second-child">
                <div>
                    <a href="#home">Home</a>
                </div>
                <div>
                    <a href="#about">About</a>
                </div>
                <div>
                    <a href="#skills">Skills</a>
                </div>
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <a href="#contact">Contact</a>
                </div>
                <div>
                <a href="https://drive.google.com/file/d/1NB_u5JXnniuBGCaoeRZQhOo7GptosBA7/view?usp=sharing" rel='noreferrer' target='blank'>
                <button style={{width:"100px",fontWeight:"800", height:"35px", color:"gold", backgroundColor:"black", cursor:"pointer", border:"5px solid yellow"}}>Resume</button>
                        </a>
                </div>
            </div>

        </div>

    )
};

export default Navbar;