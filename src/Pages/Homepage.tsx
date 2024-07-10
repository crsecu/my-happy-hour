import styles from "./Homepage.module.css";
import Nav from "../components/Nav/Nav";
import FeaturedList from "../components/FeaturedList/FeaturedList";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import { Place } from "../utils/Place";

interface HomepageProps {
  places: Place[];
}

function Homepage({ places }: HomepageProps): React.JSX.Element {
  return (
    <main>
      <h2>Main content goes here</h2>
      <FeaturedList places={places} />
    </main>
  );
}

export default Homepage;
