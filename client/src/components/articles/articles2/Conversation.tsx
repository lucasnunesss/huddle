import styles from "./conversation.module.scss";
import BgTop from "/bg-top-1.svg";
import Grow from "/Grow.svg";
import BgTop3 from "/bg-top-3.svg";
import conversation from "/conversation.svg"
import BgTop2 from "/bg-top-2.svg"
import illustration_users from "/illustration_users.svg"
const Conversation = () => {
  return (
    <>
      <article className={styles.bg_divider}>
        <img src={BgTop} alt="" />
        <div className={styles.divider}>
          <img src={Grow} alt="" className={styles.conversation_grow} />
          <div className={styles.grow_text}>
            <h2>Grow Together</h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.bg_divider}>
      <img src={BgTop3} alt=""  />
        
        <div className={`${styles.divider} ${styles.second_option}`}>
          <img src={conversation} alt="" className={styles.conversation_grow} />
          <div className={styles.grow_text}>
            <h2>Flowing Conversations</h2>
            <p>
            You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
            just-in-time loading for a more natural flow.
            </p>
          </div>
        </div>
      </article>

      <article className={styles.bg_divider}>
      <img src={BgTop2} alt="" />
        
        <div className={`${styles.divider}`}>
          <img src={illustration_users} alt="" className={styles.conversation_grow} />
          <div className={styles.grow_text}>
            <h2>Your Users</h2>
            <p>
            It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
            once signed in to your app, your users can start chatting immediately.
            </p>
          </div>
        </div>
      </article>
      
      
    </>
  );
};

export default Conversation;
