import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/slices/counterSlice";
import { NavLink } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between mb-3 p-4">
      <h2>Redux Toolkit</h2>

      <nav className="d-flex gap-2 align-items-center">
        <NavLink to={ "/"}>CRUD</NavLink>
        <NavLink to={ "/sayac"}>SAYAÇ</NavLink>
        <button className="btn bg-black text-white"
         onClick={()=> dispatch(changeTheme())}>
          Temayı Değiştir
      </button>
      </nav>  
    </div>
  );
};

export default Header;
