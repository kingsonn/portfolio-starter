import React from "react";
// images
import Image from "../assets/abhi.png";
//icons
import {
	FaGithub,
	FaYoutube,
	FaDribbble,
	FaRegLightbulb,
} from "react-icons/fa6";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
	return (
		<section
			className="min-h-[85vh] lg:min-h-[78vh] mb-3 flex items-center"
			id="home"
		>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* text */}
					<div className="flex-1 text-center font-secondary lg:text-left">
					<motion.div
					variants={fadeIn("down", 0.5)}
					initial="hidden"
					whileInView={"show"}
					className=" lg:flex object-center flex-1  lg:max-w-[482px]">
						<img className="object-center rounded-[50px] "  src={Image} alt="" />
					</motion.div>
						<motion.h1
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[55px] mt-3 font-bold leading-[0.8] lg:text-[110px]"
						>
							ABHIJEET <span>ANAND</span>
						</motion.h1>
						<motion.div
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
						>
							{/* <span className="text-white mr-4">I am a</span> */}
							<TypeAnimation
								sequence={[
									"Love",
									2000,
									"Light",
									2000,
									"Empowerment",
									1000,
								]}
								speed={50}
								className="text-acc"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn("up", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0"
						>
						I would, I could, I should are all fallacies to the dreams. The thing that makes a difference is “I will”.
						</motion.p>
						<motion.div 
						variants={fadeIn("up", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.6 }}
						className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
							<button className="btn btn-lg">Let's make it happen</button>
							
						</motion.div>
						{/* socials */}
						<motion.div 
						variants={fadeIn("up", 0.7)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
							<a href="#">
								{/* <FaYoutube /> */}
							</a>
							<a href="#">
								{/* <FaGithub /> */}
							</a>
							<a href="#">
								{/* <FaDribbble /> */}
							</a>
						</motion.div>
					</div>
					{/* image */}
					
				</div>
			</div>
		</section>
	);
};

export default Banner;
