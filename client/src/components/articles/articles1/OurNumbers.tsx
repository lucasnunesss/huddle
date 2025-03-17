import Screen from "/screen-mockups.svg";
import Community from "../../../assets/Community";
import styles from "./ourNumbers.module.scss";
import IconMessages from "../../../assets/IconMessages";

import Conversation from "../articles2/Conversation";

const OurNumbers = () => {
  return (
    <article className={styles.article}>
      <img src={Screen} alt="" />
      <div className={styles.community}>
        <div className={styles.community_content}>
          <span className={styles.icon}>
            <Community />
          </span>
          <h1>1.4k+</h1>
          <p>Communities Formed</p>
        </div>
      </div>
      <div className={styles.community}>
        <div className={styles.community_content}>
          <span className={styles.icon}>
            <IconMessages />
          </span>
          <h1>2.7m+</h1>
          <p>  Messages Sent</p>
        </div>
      </div>


    <Conversation />
    
    </article>
  );
};

export default OurNumbers;
