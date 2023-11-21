import Image from "next/image";
import React from "react";
import EmptyImage from "../../assets/empty-box.png";
import styles from "./styles.module.css";

const EmptyState = () => {
  return (
    <div className={styles.emptyStateContainer}>
      <h3 className={styles.text}>You don&rsquo;t have any notes</h3>
      <Image src={EmptyImage} width={300} height={300} alt={""} />
    </div>
  );
};
export default EmptyState;
