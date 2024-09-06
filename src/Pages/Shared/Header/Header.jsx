import moment from 'moment';

const Header = () => {
    return (
        <div className="space-y-6 mb-7">
            <img className=" w-2/6 mx-auto    " src="/assets/images/cover.png" alt="" />
            <p className="text-2xl font-semibold text-center">{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
        </div>
    );
};

export default Header;