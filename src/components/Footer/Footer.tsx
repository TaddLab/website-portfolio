import { Button, Divider, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Footer.css";

export default function Footer() {
	const handleScrollToTop = () => {
		// Scroll to the top of the page using window.scrollTo
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Smooth scroll animation
		});
	};
	return (
		<div className="footer-parent">
			<Divider className="footer-divider" variant="middle" />
			<div className="footer-child">
				<h5 className="footer-content">
					<Link
						href="https://github.com/T-Al-D"
						className="footer-content"
					>
						<Button>
							TaddLab GitHub
							<GitHubIcon
								sx={{
									color: "#34ebeb",
								}}
							></GitHubIcon>
						</Button>
					</Link>
					<Link
						href="https://github.com/TaddLab/website-portfolio"
						className="footer-content"
					>
						<Button>
							Code behind website
							<CodeIcon
								sx={{
									color: "#34ebeb",
								}}
							></CodeIcon>
						</Button>
					</Link>
					<Button onClick={handleScrollToTop}>
						Scroll to Top
						<ArrowUpwardIcon
							sx={{
								color: "#34ebeb",
							}}
						></ArrowUpwardIcon>
					</Button>
				</h5>
			</div>
		</div>
	);
}
