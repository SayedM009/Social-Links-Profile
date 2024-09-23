import styles from "./SocialLinksCards.module.css";
import IMG from "../../assets/assets/images/avatar-jessica.jpeg";
function SocialLinksCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.img} src={IMG} alt="Jessica Randall Image" />
        <h2 className={styles.cardTitle}>Jessica Randall</h2>
        <address className={styles.address}>London, United Kingdom</address>
      </div>
      <div className={styles.cardBody}>
        <p
          className={styles.major}
        >{`"Front-end developer and avid reader"`}</p>
        <ul className={styles.socialLinksContainer}>
          <li>GitHub</li>
          <li>Frontend Mentor</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
}

export default SocialLinksCard;
