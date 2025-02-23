import { useState } from 'react';
import { usePosts } from '../context/PostContext';

function Admin() {
  const { addPost } = usePosts();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'poem'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({ title: '', content: '', type: 'poem' });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-primary mb-8">Admin Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Post Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full p-2 border rounded-md"
          >
            <option value="poem">Poem</option>
            <option value="moral">Moral Teaching</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full p-2 border rounded-md h-40"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default Admin;