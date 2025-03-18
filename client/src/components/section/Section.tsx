import styles from "./section.module.scss"
import BgTop4 from "/bg-top-4.svg"
const Section = () => {
  return (
    <section className={styles.section_community}>
      <img src={BgTop4} alt="" />
      <div>
        <h1>Ready To Build Your Community?</h1>
        <button>Get Started For Free</button>
      </div>
    </section>
  )
}

export default Section