import React from "react";
import Image from "../assets/logoo.png";

// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});
	return (
		<section className="section" id="about" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					{/* img */}
					{/* <motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
					></motion.div> */}
					{/* text */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					><div className=" flex">
						<img className="rounded-[50px] w-12 h-12"  src={Image} alt="" />
						<h2 className=" ml-3 mt-2 text-acc font-primary text-[32px] mb-6 tracking-[10%] ">abCoffee</h2>
						</div>
						<h3 className="h3 mb-4">
							
Introducing the new wave of coffee revolution in India
						</h3>
						<p className="mb-6">
						We are India’s first Tech-enabled affordable specialty company built on the mission to democratize specialty coffee in India by making India's highest-graded coffee accessible at honest prices across the country. The story of abCoffee began with finding an answer to the question: Why is a decent cup of coffee still a luxury in India and prices comparable to that of the US, Europe, and Australia?
						</p>
						{/* stats */}
							
						<div className="flex gap-x-8 items-center">
							<button className="btn btn-lg">Check us out!</button>
						
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
