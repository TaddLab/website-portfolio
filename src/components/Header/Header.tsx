import homepageImg from "../../assets/images/homepage/hompepageImg2.png";
import Navigation, { navBaseUrl } from "../Navigation/Navigation";
import WavingHandIcon from "@mui/icons-material/WavingHand";

import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
	/*to display Date/Time */
	/*alternative for time : {date.toLocaleTimeString()} */
	let [date, setDatetime] = useState(new Date());

	/*for date 1x per hour is enough */
	useEffect(() => {
		const timer = setInterval(() => {
			setDatetime(new Date());
		}, 360000);

		// Cleanup function to clear the timer when the component unmounts
		return () => clearInterval(timer);
	}, []); // Empty dependency array means this effect runs only once on mount
	return (
		<div className="headParent">
			<Navigation />
			<div className="headChild">
				<a href={navBaseUrl}>
					<img className="homepageImg" src={homepageImg} alt="" />
				</a>
			</div>

			<div className="headChild">
				<header>
					<h1 className="headerLetters1">
						Hello, I´m Tadd <WavingHandIcon />
					</h1>

					<h3 className="headerLetters2">
						IT specialist (application development)
					</h3>
					<p>{date.toLocaleDateString()}</p>
				</header>
			</div>
		</div>
	);
}
