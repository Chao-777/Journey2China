export default function NavBar() {
   return (
      <nav className="flex items-center justify-between px-10 py-5 bg-gray-900 text-white">
         <div className="text-2xl font-bold">Journey2China</div>
   
         <div className="flex items-center gap-6">
            <a href="#" className="hover:text-purple-300">Home</a>
            <a href="#" className="hover:text-purple-300">About</a>
            <a href="#" className="hover:text-purple-300">Contact</a>
            <a href="#" className="hover:text-purple-300">Login/SignUp</a>
         </div>
      </nav>
   )
}
