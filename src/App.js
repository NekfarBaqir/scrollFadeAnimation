import styles from "./App.module.css";
import Card from "./components/Card/Card";
import DATA from "./data/data.json";
function App() {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <h1>Welcome to reactjs, Framer motion and react-intersection observer</h1>
    </div>
      <div className={styles.cardSectionContainer}>
        {DATA.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
