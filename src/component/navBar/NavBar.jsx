import './NavBar.scss'
import {motion} from "framer-motion"
import SideBar from './siderbar/SideBar';

const NavBar = () => {
  return (
    <div className='navbar'>
        {/*Sidebar*/}
        <SideBar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}} 
            >
                Mehadi Khireddine
                </motion.span>
            <div className="social">
                <a href="https://www.instagram.com/kayro7892?igsh=aG55a3diczRyd3Rw"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/khireddine-mehadi-6447402a6/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://www.youtube.com/channel/UCm6WD68K6dSLelxceeVdpTA"><img src="/youtube.png" alt="" /></a>
                <a href="https://dribbble.com/webdev7806/shots"><img src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
  );
}

export default NavBar;