import BgFooter from "/bg-footer.svg";
import styles from "./footer.module.scss";
import Logo from "../../assets/logo.tsx";
import LogoFone from "/icon-phone.svg";
import LogoEmail from "/icon-email.svg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className={styles.footer_page}>
      <img src={BgFooter} alt="" />
      <div className={styles.footer_content}>
        <h3>Newsletter</h3>
        <p className={styles.text}>
          {" "}
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
        <div className={styles.subscribe}>
          <input type="text" />
          <button>Subscribe</button>
        </div>
      <div className={styles.contact}>
       
        <Logo />
        <p className={styles.text_2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
        vestibulum a, ultrices quis sem.</p>
        
      </div>

      <div className={styles.midia}>
        
          <img src={LogoFone} alt="" />
          <span>Phone: +1-543-123-4567</span>
      </div>
      <div className={styles.midia}>
          <img src={LogoEmail} alt="" />
          <span>example@huddle.com
          </span>
      </div>

        <div className={styles.social}>
          <FaFacebookSquare color={"white"} size={40} />
          <FaInstagram color={"white"} size={40}  />
          <FaSquareTwitter color={"white"} size={40} />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
