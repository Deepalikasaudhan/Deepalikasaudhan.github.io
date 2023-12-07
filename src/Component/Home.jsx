import './Home.css';
import { Link } from 'react-scroll';
const Home =()=>{
    return(
     <>
     <div id='home' className='count'>
    <div className="home-containar">
        <div className="homeBox">
            <div className="home-left-side">
                <h3>Hii,</h3>
                    <h5> I'm <span style={{color:"blue", fontSize:"50px"}}>Deepali Kasaudhan</span></h5>
                    <h6>Welcome To My Portfolio!</h6>
                    <h4> <span style={{color:"blue", fontSize:"50px"}}>F</span>ull Stack <span style={{color:"blue", fontSize:"50px"}}>W</span>eb <span style={{color:"blue", fontSize:"50px"}}>D</span> eveloper</h4>
                    <div className="resumeButton">
                   <a href="https://drive.google.com/file/d/1NB_u5JXnniuBGCaoeRZQhOo7GptosBA7/view?usp=sharing" rel='norerrer' target='black'>
                    <button style={{width:"150px",fontWeight:"800", height:"45px", color:"gold", backgroundColor:"black", cursor:"pointer",border:"5px solid yellow", marginLeft:"150px"}}>View Resume
                        <span className='icon'><ion-icon name="eye"></ion-icon></span>
                    </button>
                   </a>
                </div> 
            </div>
            <div className="home-right-side">
                <div>
                    <img src="https://ca.slack-edge.com/T056QHT26Q0-U059T4R54QJ-7a549ec99d6b-512" alt="" />
                </div>
            </div>
        </div>
    </div>
      </div>

     </>
    )
}
export default Home;