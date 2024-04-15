const Spinner = () => {
    return <>
        <div className="spinner-div">
            <div className="spinner-border text-secondary" role="status" style={{width:'10rem', height:'10rem'}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </>
}
export default Spinner;