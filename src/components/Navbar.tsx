import { Link } from "react-router-dom";

export default function Navbar() {
    
  return (
    <div
    className="bg-[#030303] text-white"
    >
        <nav
        className='flex gap-3 items-center p-3 max-w-screen-lg justify-between mx-auto'
        >
            <Link 
            to="/"
            className='text-2xl font-bold'
            >
                My Blog
            </Link>
            <ul
            className='flex gap-4'
            >
                <li>
                    <Link 
                    to="/blogs"
                    className="hover:text-blue-600 transition-colors"
                    >
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/authors"
                    className="hover:text-blue-600 transition-colors" 
                    >
                        Authors
                    </Link>
                </li>
            </ul>
            {/* <a
            href="/"
            className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:opacity-90 transition-opacity"
            >
                Kontakt
            </a> */}
        </nav>
    </div>
  )
}
