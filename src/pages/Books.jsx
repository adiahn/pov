import { BookOpenIcon } from '@heroicons/react/24/outline';

const books = [
  {
    id: 1,
    title: "The Path of Virtue",
    description: "A collection of poems exploring moral excellence and character.",
    amazonLink: "https://amazon.com/example-1",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Wisdom's Garden",
    description: "Reflections on life, virtue, and the pursuit of goodness.",
    amazonLink: "https://amazon.com/example-2",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
  },
];

function Books() {
  return (
    <div>
      <h1 className="text-4xl font-serif font-bold text-primary mb-8">Published Works</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {books.map(book => (
          <div key={book.id} className="card">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            
            <h2 className="text-2xl font-serif font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">{book.description}</p>
            
            <a
              href={book.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center space-x-2"
            >
              <BookOpenIcon className="w-5 h-5" />
              <span>Buy on Amazon</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;