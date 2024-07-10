import { Link } from "react-router-dom";
import styles from "./FeaturedList.module.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Place } from "../../utils/Place";
interface FeaturedListProps {
  places: Place[];
}

function FeaturedList({ places }: FeaturedListProps): React.JSX.Element {
  console.log("places ", places);
  return (
    <section
      className={styles.featuredSection}
      aria-labelledby="featured-heading"
    >
      <h2 id="featured-heading">Featured Spots</h2>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <Link to={`/placeDetail/${place.name}`}>
              <RestaurantCard placeData={place} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedList;
