// Button_container.jsx
import ButtonPrint from './ButtonPrint';
import styles from './Button_container.module.css';

const Button_container = () => {
  let buttonData = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '.', '='];
  return (
    <div className={styles.buttonContainer}>
      {buttonData.map((item, index) => (
        <ButtonPrint key={index} value={item} />
      ))}
    </div>
  );
};

export default Button_container;
