import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import "./Contact.scss"


const variants ={
    initial: {
        y:500,
        opacity:0,
    },
    animate: {
        y:0,
        opacity:1,
        transition: {
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}
const Contact = () => {

 
    const formRef = useRef();
    const [error,setError]= useState(false);
    const [Success,setSeccess]= useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_vruz4nc', 'template_3xtcdrg', formRef.current, {
            publicKey: 'v6_1EsYtlteSGYYbv',
          })
        .then((result)=>{ 
            setSeccess(true)
          },
          (error) => {
            setError(true)
        });
      };
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView={"animate"}>
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Travaillons ensemble</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>mail</h2>
                <span>mehadi.webdev@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Adresse</h2>
                <span>Bienvenue a Freneuse</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Télephone</h2>
                <span>0664611131</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.form 
            ref={formRef}
            onSubmit={sendEmail}
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{delay: 0.5, duration:3}}>

                <input type="text" placeholder="Nom" name="nom"/>
                <input type="email" placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message" />
                <button>Submit</button>
                {error && "Error"}
                {Success && "Success 🎉" }
            </motion.form>
        </div>
    </motion.div>
  );
}

export default Contact;