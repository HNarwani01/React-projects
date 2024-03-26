const SingleItem=({Food, bought,toChange})=>{
return <>
        <p>{Food}</p><button onClick={()=>{toChange(bought);}} className="btn-light ">buy</button>
</>
}
export default SingleItem;