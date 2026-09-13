import { Stack, Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <Stack className="footer-container">
            <Stack className="main">
                <Stack className="left">
                    <Box component={"div"} className="footer-box">
                        <img src="/img/logo/logoWhite.svg" alt="" className="logo" />
                    </Box>
                    <Box component={"div"} className="footer-box">
                        <span>Total free customer care</span>
                        <p>+82 10 4867 2909</p>
                    </Box>
                    <Box component={"div"} className="footer-box">
                        <span>New live</span>
                        <p>+82 10 4867 2909</p>
                        <span>Support?</span>
                    </Box>
                    <Box component={"div"} className="footer-box">
                        <p>Follow us on social media</p>
                        <div className="media-box">
                            <FacebookOutlinedIcon />
                            <TelegramIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </Box>
                </Stack>
                <Stack className="right">
                    <Box component={"div"} className="top">
                        <strong>Keep yourself up to date</strong>
                        <div>
                            <input type="text" placeholder="Your Email" />
                            <span>Subscribe</span>
                        </div>
                    </Box>
                    <Box component={"div"} className="button">
                        <div>
                            <strong>Popular Search</strong>
                            <span>Property for Rent</span>
                            <span>Property Low to hide</span>
                        </div>
                        <div>
                            <strong>Quick Links</strong>
                            <span>Terms of Use</span>
                            <span>Privace Policy</span>
                            <span>Pricing Plans</span>
                            <span>Our Services</span>
                            <span>Contact Support</span>
                            <span>FAQs</span>
                        </div>
                        <div>
                            <strong>Discover</strong>
                            <span>Seoul</span>
                            <span>Gyeongido</span>
                            <span>Busan</span>
                            <span>Jejudo</span>
                        </div>
                    </Box>
                </Stack>
            </Stack>
            <Stack className="second">
                <span>© Nestar - All rights reserved. Nestar 2025</span>
                <span>Privacy • Terms • Sitemap</span>
            </Stack>
        </Stack>
    );
}

export default Footer;