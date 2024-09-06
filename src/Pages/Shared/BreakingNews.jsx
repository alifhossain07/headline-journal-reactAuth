import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-2">
            <button className="btn btn-info">Latest Updates</button>
            <Marquee className="font-bold" speed={100}>

            <Link className="mr-10" to="/"> Match Highlights: Germany vs Spain — as it happened   ! </Link>
            <Link className="mr-10" to="/"> Match Highlights: France vs Portugal — as it happened   ! </Link>
            <Link className="mr-10" to="/"> Match Highlights: Ecuador vs Croatia — as it happened   ! </Link>
            
</Marquee>
        </div>
    );
};

export default BreakingNews; 