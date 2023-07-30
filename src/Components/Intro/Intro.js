import styles from "./Intro.module.css";
import myImage from "../assets/meals.jpg";
const Intro = () => {
  return (
    <div className={styles.intro}>
      <figure>
        <img src={myImage} alt="delicious food"></img>
      </figure>
      <div className={styles.content}>
        <h2>Delicious food delivered To You</h2>
        <p>
          Choose Your Favorite meal from our brand selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high quality ingredients, just in-time
          and ofcourse by experienced chiefs
        </p>
      </div>
    </div>
  );
};
export default Intro;
