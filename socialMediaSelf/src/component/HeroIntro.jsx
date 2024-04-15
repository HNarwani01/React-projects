import { FaShare } from "react-icons/fa6";
const HeroIntro = () => {
    return <>
        <div className="row ">
            <div className="col-lg-4 hero-row">
                <img src="./src/assets/best-seller.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <h2 className="fw-normal">Best Seller</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><a className="btn btn-secondary" href="#">Buy Now <FaShare /></a></p>
            </div>
            <div className="col-lg-4 hero-row">
                <img src="./src/assets/latest-images.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <h2 className="fw-normal">Latest Phones</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                <p><a className="btn btn-secondary" href="#">Buy Now <FaShare /></a></p>
            </div>
            <div className="col-lg-4 hero-row">
                <img src="./src/assets/Value-for-money.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <h2 className="fw-normal">Value For Money</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><a className="btn btn-secondary" href="#">Buy Now <FaShare /></a></p>
            </div>
        </div>
    </>
}
export default HeroIntro;