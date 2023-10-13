import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
	{
		name: "Vision",
		description:
		"To build a society where every knowledgeable person mentors a less informed person, a wiser helps the less wise,and a more capable brings the less capable up with him. Imagine where every other person is linked to another and working relentlessly to make each other successful. The world would grow at a pace that would be unprecedented and make the lives of every human more fulfilling and rewarding.",
		link: "Learn more",
	},
	{
		name: "Mission",
		description:
		"To make this world a better place than what I found it.",
		link: "Learn more",
	},

];

const Services = () => {
	return (
		<section className="section " id="services">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text & image*/}
					{/* <motion.div 
					variants={fadeIn('right', 0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{once: false, amount: 0.3}}
					className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
						<h2 className="h2 text-accent mb-6">What I Do</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							I'm a Freelance Front-end Developer with over 5 years of
							experience.
						</h3>
						<button className="btn btn-sm">See my work</button>
					</motion.div> */}

					{/* services */}
					<motion.div 
					variants={fadeIn('left', 0.3)}
					initial="invisible"
					whileInView={"show"}
					viewport={{once: false, amount: 0.3}}
					className="flex-1">
						{/* service list */}
						<div>
							{services.map((service, index) => {
								// destructure service
								const { name, description, link } = service;
								return (
									<div
										className="border-b border-white/20  mb-[38px] flex"
										key={index}
									>
										<div className="max-w-[476px]">
											<h4 className="text-[25px] text-acc tracking-wider font-primary font-semibold mb-6">
												{name}
											</h4>
											<p className="font-secondary leading-tight">
												{description}
											</p>
										</div>
										{/* <div className="flex flex-col flex-1 items-end">
											<a
												href="#"
												className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
											>
												<BsArrowUpRight />
											</a>
											<a href="#" className="text-gradient text-sm">
												{link}
											</a>
										</div> */}
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
