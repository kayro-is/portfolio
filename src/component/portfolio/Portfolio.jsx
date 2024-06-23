import { useRef } from 'react';
import './Portfolio.scss'
import { motion, useScroll,useSpring, useTransform } from 'framer-motion';


const items = [


{
    id:1,
    title:"React Commerce",
    img:"https://img.freepik.com/photos-gratuite/contexte-programmation-personne-travaillant-codes-ordinateur_23-2150010125.jpg?t=st=1717770506~exp=1717774106~hmac=fab8d26d8848d77da443f7ccbd2e1610d02af29c198531f53df768b608a0d0b0&w=1800",
    desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},
{
    id:2,
    title:"Next.js blog",
    img:"https://img.freepik.com/photos-gratuite/concept-marketing-medias-sociaux-pour-marketing-applications_23-2150063165.jpg?t=st=1717770283~exp=1717773883~hmac=93067b24b370bc4baf1c039eee0653a43076be2869ddb81d6717a620f5465334&w=1800",
    desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},
{
    id:3,
    title:"Vanilla JS App",
    img:"https://img.freepik.com/photos-gratuite/representations-experience-utilisateur-design-interface_23-2150104494.jpg?t=st=1717768907~exp=1717772507~hmac=57e8032b674386bc833ffe910e2679c7ad666372b264984c2c61303764cc5ff4&w=1800",
    desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},
{
    id:4,
    title:"Music App",
    img:"https://img.freepik.com/photos-gratuite/modele-banniere-vente-vendredi-noir-maquette-mobile_460848-6328.jpg?t=st=1717770329~exp=1717773929~hmac=2e900fcb6fc0425e2cb66c1a575029387f11106285a811758ef18100be86b4cc&w=1800",
    desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},

 ];

const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
       // offset:["start start ", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300]);
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                <h2> {item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
            </div>
        </section>
    )
} 

const Portfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["end end ", "start start"],
    });

        const scaleX = useSpring(scrollYProgress, {
       stiffness: 100,
       damping: 30,
        })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Travaux en vedette</h1>
                <motion.div style={{scaleX:scaleX }} className="progressBar"></motion.div>
            </div>
            
                {items.map((item) => (
                <Single item={item}  key={item.id} />
                ))}
        </div>
    );
}

export default Portfolio;