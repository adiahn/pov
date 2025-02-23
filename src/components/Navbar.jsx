import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-2xl font-bold">
            Poetry of Virtue
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/books" className="hover:text-accent transition-colors">Books</Link>
            <Link to="/admin" className="hover:text-accent transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;