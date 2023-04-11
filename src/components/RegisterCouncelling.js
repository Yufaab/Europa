import React from 'react';
import styles from './RegisterCouncelling.module.css';

function RegisterCouncelling() {
  return (
    <div className={styles.topContainerRegister}>
      <h3 className={styles.councellingHead}>
        Register Now To Consult A Councellor
      </h3>
      <form className={styles.councellingForm}>
        <input
          type="text"
          placeholder="Full Name"
          className={styles.formInputs}
        />
        <input type="email" placeholder="Email" className={styles.formInputs} />
        <input
          type="text"
          placeholder="Mobile Number"
          className={styles.formInputs}
        />
        <input
          type="text"
          placeholder="City/State"
          className={styles.formInputs}
        />
        <input type="text" placeholder="Rank" className={styles.formInputs} />
        <textarea
          name="message"
          rows="2"
          cols="30"
          placeholder="Write a message"
          className={`${styles.formInputsTextareaPlace} ${styles.formInputs}`}
        >
          {}
        </textarea>
        <button type="submit" className={styles.formCouncellingSubmitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterCouncelling;
