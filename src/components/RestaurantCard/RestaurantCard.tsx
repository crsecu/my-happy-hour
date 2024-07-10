import styles from "./RestaurantCard.module.css";
import { Place } from "../../utils/Place";

interface RestaurantCardProps {
  placeData: Place;
}

function RestaurantCard({ placeData }: RestaurantCardProps): React.JSX.Element {
  return (
    <article className={styles.restaurantCard}>
      <h3>{placeData.name}</h3>
      <img src="/placeholder-img.png" />
      <span>{placeData.city}</span>
      <span>{placeData.state}</span>
      <span className={styles.category}>Pizza</span>
    </article>
  );
}

export default RestaurantCard;
