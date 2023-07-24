
import {motion} from "framer-motion";



function About() {
    // const opacity = useTransform(inView, (value) => (value ? 1 : 0));
    return (
        <div className="">
        <motion.h1 
        // initial={{opacity:0}}  transition={{type:"spring",bounce:0.5,duration:0.9,delay:0.2}} whileInView={{opacity:1}} viewport={true}
         className=' block max-[422px]:text-sm font-light leading-relaxed  font-mon text-lg flex-wrap justify-center p-5 flex-col'
                                          initial={{opacity: 0, y: 100}}
                                          transition={{type: "spring",bounce: 0.2,duration: 1.5, delay: 0.3}}
                                          whileInView={{ opacity: 1, y: 0}}
                                          viewport={{ once: true }}
        >
        Hi, my name is <span className="underline underline-offset-1 decoration-sky-600 decoration-4 text-black ">Fahlevi</span> I am a front-end web developer,
        i&rsquo;m 23 years old. I got a bachelor of Informatics Engineering at Universitas Islam Kebangsaan Indonesia(2018-2023), i am really passionate about Javascript and Front-end Web Development
         {/* I find myself constantly immersed in a world of creativity and innovation. 
        Every day, 
        I get to use my skills and knowledge to bring visual designs to life and 
        create compelling user experiences. Whether it`s developing responsive layouts, 
        crafting animations, or optimizing web performance, there`s always something new to learn and explore.
        <br /> */}

        I started learning web programming in 2021. Before that, I had a background in PHP/Laravel.

        Of course, being a front-end developer also comes with its fair share of challenges.
         With technology constantly evolving and user expectations always on the rise,
         staying up-to-date with the latest tools and techniques can be daunting.
         However, I am always up for the challenge and am constantly seeking out new ways to improve my skills 
         and stay at the forefront of this exciting industry.
        </motion.h1>
        
        </div>
    )
}

export default About;