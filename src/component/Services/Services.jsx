 import { useRef } from 'react'
import './Services.scss'
 import { animate, color, motion, useInView } from 'framer-motion'
 

 const variants={
    initial:{
        x: -500,
        y:100,
        opacity: 0
    },
    animate:{
        x:0,
        opacity: 1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    
    }
 }
 const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})
     return (
         <motion.div 
         className='Services'
          variants={variants}
           initial='initial'
          //  animate='animate'
         // whileInView="animate"
         ref={ref}
         animate={'animate'}
            >
               
                <motion.div className="textContainer"variants={variants}>
                        <p>
                        je m&apos;efforce d&apos;apporter des solutions innovantes 
                        <br />pour soutenir la croissance de votre marque et lui permettre de prospérer
                        </p>
                        <hr />
                </motion.div>
               <motion.div className="titleContainer" variants={variants}>
                    <div className="title">
                        <img src="/people.webp" alt="" />
                        <h1>
                        Des Idées  <motion.b whileHover={{color:'orange'}}>Uniques</motion.b>
                        </h1>
                    </div>
                    <div className="title" >
                        <h1>
                        Pour Votre  <motion.b whileHover={{color:'orange'}}>Entreprise</motion.b>
                        </h1>
                        <button>CE QUE NOUS FAISONS</button>
                    </div>
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>

                        <h2>l&apos;image de marque</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Voluptates, corporis. Et sapiente consectetur rerum sit cum, laborum sunt.
                             Ex obcaecati illo veritatis impedit provident error nisi nostrum quas dolore consequuntur?
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>

                        <h2>l&apos;image de marque</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Voluptates, corporis. Et sapiente consectetur rerum sit cum, laborum sunt.
                             Ex obcaecati illo veritatis impedit provident error nisi nostrum quas dolore consequuntur?
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>

                        <h2>l&apos;image de marque</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Voluptates, corporis. Et sapiente consectetur rerum sit cum, laborum sunt.
                             Ex obcaecati illo veritatis impedit provident error nisi nostrum quas dolore consequuntur?
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>

                        <h2>l&apos;image de marque</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Voluptates, corporis. Et sapiente consectetur rerum sit cum, laborum sunt.
                             Ex obcaecati illo veritatis impedit provident error nisi nostrum quas dolore consequuntur?
                        </p>
                        <button>Go</button>
                    </motion.div>
                </motion.div>
         </motion.div>
     );
 }
 
 export default Services;