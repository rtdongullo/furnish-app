import { Link } from "react-router-dom";
import K from "../constants"

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 fixed w-full left-0 top-0">
      <span>
        <img src="" alt="" />
      </span>
      <div className="flex gap-x-10">
        {K.NAVLINKS.map(
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