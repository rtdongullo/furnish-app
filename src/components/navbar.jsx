import { Link } from "react-router-dom";
import K from "../constants";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20">
      <span>Logo Here</span>
      <div className="flex gap-x-10">
        {
          K.NAVLINKS.map(
            (item,index)=>{
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }
      </div>
    </div>
  )
};

export default Navbar;