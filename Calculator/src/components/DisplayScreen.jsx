import styles from './DisplayScreen.module.css';

const DisplayScreen = ({ problem }) => {
    // Use the join method to concatenate the elements of the problem array into a single string
    
    return (
        <div className={styles.displayTag}>
            <input type="text" value={problem} readOnly />
        </div>
    );
}
    

export default DisplayScreen;
