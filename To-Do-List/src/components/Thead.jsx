
const Thead = () => {
    return <>
        <thead>
            <tr>
                <th scope="col">Count</th>
                <th scope="col" className="input-work"><input type="text" placeholder="What to do?" /></th>
                <th scope="col" className="input-date"><input type="date" name="" id="" /></th>
                <th scope="col" className="input-submit"><button className="hr-btn btn btn-success">Add</button></th>
            </tr>
        </thead>
    </>
}
export default Thead;