import styles from "./RestaurantCard.module.css";

interface RestaurantCardProps {}

function RestaurantCard(props: RestaurantCardProps): React.JSX.Element {
  return (
    <a href="#" className={styles.restaurantCard}>
      <h3>Cugino Forno</h3>
      <img src="/placeholder-img.png" />
      <span>Pizza</span>
    </a>
  );
}

export default RestaurantCard;
