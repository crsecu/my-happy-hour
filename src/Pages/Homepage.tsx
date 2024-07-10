import styles from "./Homepage.module.css";
import Nav from "../components/Nav/Nav";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";

interface HomepageProps {}

function Homepage(props: HomepageProps): React.JSX.Element {
  return (
    <main>
      <section>
        <h2>Main content goes here</h2>
        <RestaurantCard />
      </section>
    </main>
  );
}

export default Homepage;
