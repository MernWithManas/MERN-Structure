import {NavLink} from "react-router-dom";


function Header() {
  return (
    <header className="w-full py-5 mb-10 shadow-lg">
        <nav className="flex items-center justify-around">
            <div className="text-3xl tracking-widest text-cyan-700">SCTEVT</div>
            <div className="grid grid-cols-6 text-center">
                <NavLink to="/" className={({isActive}) => `${isActive ? "text-cyan-700" : "text-black"}`}>Home</NavLink>
                <NavLink to="/blogs" className={({isActive}) => `${isActive ? "text-cyan-700" : "text-black"}`}>Blogs</NavLink>
                <NavLink to="/colleges" className={({isActive}) => `${isActive ? "text-cyan-700" : "text-black"}`}>Colleges</NavLink>
                <NavLink to="/syllabus" className={({isActive}) => `${isActive ? "text-cyan-700" : "text-black"}`}>Syllabus</NavLink>
                <NavLink to="/courses" className={({isActive}) => `${isActive ? "text-cyan-700" : "text-black"}`}>Courses</NavLink>
                <NavLink to="/downloads" className={({isActive}) => `${isActive ? "text-cyan-700" : "text-black"}`}>Downloads</NavLink>
            </div>

            <div className="flex gap-2 px-3 py-2 text-sm font-light text-white shadow bg-cyan-700">
                <button>SignUp</button>
                |
                <button>LogIn</button>
            </div>
        </nav>
    </header>
  )
}

export default Header