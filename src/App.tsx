import {HoverBorderGradient} from "./components/ui/HoverBorderGradient";
import FirstBg from './assets/Vector.png'
import Telescope from './assets/telescope.svg'
import Icon from './assets/leanlearn.svg'
import Elements from './assets/Elements.svg'
import Astronaut from './assets/Astronaut.svg'
import { motion } from 'framer-motion'
import ThirdPIc from './assets/Third.svg'
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStars } from "./components/shooting-stars";
import CardStacking from "./components/ui/card-stacking";
import StudentFst from './assets/Student_1.svg'
import IconTxt from './assets/LeanLearnWhite.svg'
import   STudentLkUP from './assets/StudentLkUp.svg'
import BgforStdnt from   './assets/BackgroundForST.svg'
import { Meteors } from "./components/ui/meteors";
import McScpe from './assets/microscope.png'
import ChmEQn from './assets/chemicalEqn.png'
import Fx from './assets/f(x).png'




export default function SpaceLanding() {
  return (

    <>

      <div className="min-h-screen bg-[#0c0c0c] relative overflow-hidden flex flex-col">
        <StarsBackground />
        <header className="flex justify-between items-center w-full  text-white">
          <img src={IconTxt} alt="" className=" w-[150px] md:min-w-[160px] z-20 p-4" />  
        </header>
        
        <img src={FirstBg} alt="" className="absolute top-0 left-0 z-[5] min-w-[900px] md:w-[100vw]" />
        <div className="relative z-10 w-full  p-0 md:p-6 min-h-screen flex sm:flex-col md:flex-col md:justify-items-start">
          <img src={Elements} alt="" className="absolute top-0 left-0 z-[-2] min-w-[100vw]  md:w-[100vw]" />
          <div className="    flex flex-col-reverse justify-between h-[50vh] md:grid md:grid-cols-2 md:gap-8 mt-1 md:mt-12 p-2 md:px-14 w-full">

            <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
            className="space-y-4 flex flex-col mt-4 md:mt-40">
              <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight px-5 md:px-0">
                A text related to
                <br />
                LeanLearn
              </h1>
              <div className="flex gap-4 ">
                <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center space-x-2 hover:scale-105 transition-all duration-500 ease-in-out    "
                >
                  <span className="text-lg font-medium">Take Quiz</span>  
                </HoverBorderGradient>
              </div>



            </motion.div>



            <div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="relative top-[-50px]  md:top-0 md:right-0">
                <img
                  src={Astronaut}
                  alt="Floating Astronaut"
                  className="w-full absolute right-0 min-w-[300px]" />
              </motion.div>
            </div>
          </div>

        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}

          className="max-w-lg  self-end p-6 motion-translate-x-in-100 motion-translate-y-in-75 space-y-3">
          <h2 className="text-white text-4xl font-bold mb-6">Personalized Learning Platform</h2>
          <div className="space-y-4 text-gray-200 text-lg font-times">
            <p>Our platform adapts to your learning style, providing customized content and resources to help you achieve your goals.</p>
            <p>
              Whether you're advancing your career, learning a new skill, or exploring new interests, LeanLearn supports you every step of the way.
            </p>
            <p>
              Engage with interactive quizzes that adapt to your progress, providing instant feedback to help you improve and track your progress.
            </p>

          </div>
        </motion.div>
        <div
          className="relative w-screen h-screen">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="self-start mt-56 px-0 md:px-20 space-y-4">
            <h2 className="text-white text-4xl font-bold mb-6">Personalized Learning Platform</h2>
            <CardStacking />
          </motion.div>
          <img src={Telescope} alt="Telescope" className="w-full max-w-[500px] absolute right-0 bottom-0 invisible md:visible" />
        </div>
        <div className="relative">
          <img src={ThirdPIc} className=" max-w-[300px]" />
        </div>
        <div className="relative w-full space-y-0 flex flex-col justify-center min-h-[100vh]">
          <div className="self-end relative flex gap-10">
          <motion.img 
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          src={Fx} alt="" className="max-w-[80px] max-h-[80px] absolute right-32 rotate-45"/>
          <motion.img 
          initial={{ y: 0 ,rotate:-12}}
          animate={{ y: [0, -10, 0] , rotate:-12}}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          src={ChmEQn} alt="" className="max-w-[170px] absolute right-10 -rotate-12"/>
          </div>

          <img 
          src={STudentLkUP} alt="" className="absolute right-0 bottom-0 max-h-[300px]"/>
          <Meteors number={10} className="absolute  left-0 bottom-0"/>
          {/* <img src={BgforStdnt} alt="absolute" /> */}
        </div>
        <ShootingStars />
      </div>

    </>
  )
}

