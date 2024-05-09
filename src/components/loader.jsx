import styles from "./loader.module.css";
function Loader() {
  return (
    <div className={`d-flex justify-content-center ${styles.p}`}>
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
