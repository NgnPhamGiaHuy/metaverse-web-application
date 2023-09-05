'use client';

import {motion} from "framer-motion";

import styles from "../styles";

import {ExploreCard, NewFeatures, TitleText, TypingText} from "../components";
import {staggerContainer, fadeIn, planetVariants} from "../utils/motion";
import {exploreWorlds, newFeatures} from "../constants";

const World = () => (
    <section className={`${styles.paddings} relative`}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
                    viewport={{once: false, amount: 0.25}}
                    className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <TypingText title="| People on the World" textStyles="text-center"></TypingText>
            <TitleText title={<>Track friends around you and invite them to play together in the same world</>}
                       textStyles="text-center"></TitleText>
            <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px]">
                <img src="/map.png" alt="map" className="w-full h-full object-cover"/>
                <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src="/people-01.png" alt="people" className="w-full h-full"/>
                </div>
                <div className="absolute top10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src="/people-02.png" alt="people" className="w-full h-full"/>
                </div>
                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src="/people-03.png" alt="people" className="w-full h-full"/>
                </div>
                <div className="absolute top-[35%] left-[20%] w-[215px] h-[165px] p-[6px] rounded-[24px] bg-white/[.08] shadow-[0_40px_80px_0px_rgba(0,0,0,0.25)]">
                    <div className="relative w-full h-full overflow-hidden rounded-[24px]">
                        <img src="/planet-02.png" alt="planet" className="relative w-full h-full scale-[3] object-cover z-10" style={{ objectPosition: "-1.9cm -0.7cm" }}/>
                    </div>
                    {/*<div>*/}
                    {/*    /!*<img src="/people-01.png" alt="people" className="w-[24px] h-[24px]"/>*!/*/}
                    {/*</div>*/}
                    <img src="/planet-blur-02.png" alt="planet blur" className="absolute top-0 left-0 w-full h-full rounded-[24px] object-cover scale-150 z-0"/>
                </div>
                <div className="absolute top-[5%] right-[20%] w-[215px] h-[165px] p-[6px] rounded-[24px] bg-white/[.08] shadow-[0_40px_80px_0px_rgba(0,0,0,0.25)]">
                    <div className="relative w-full h-full overflow-hidden rounded-[24px]">
                        <img src="/planet-03.png" alt="planet" className="relative w-full h-full scale-[4] object-cover z-10" style={{ objectPosition: "-5cm -0.5cm" }}/>
                    </div>
                    <img src="/planet-blur-02.png" alt="planet blur" className="absolute top-0 left-0 w-full h-full rounded-[24px] object-cover scale-150 z-0"/>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default World;
