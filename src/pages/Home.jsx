import { usePosts } from '../context/PostContext';
import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Home() {
  const { posts, toggleLike, addComment } = usePosts();
  const [commentText, setCommentText] = useState('');
  const [activeCommentPost, setActiveCommentPost] = useState(null);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-serif font-bold text-primary">Latest Inspirations</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <article key={post.id} className="card">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                {post.type}
              </span>
            </div>
            
            <h2 className="text-2xl font-serif font-bold mb-4">{post.title}</h2>
            <div className="prose-content mb-6">{post.content}</div>
            
            <div className="flex items-center justify-between border-t pt-4">
              <button
                onClick={() => toggleLike(post.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-accent"
              >
                <HeartIcon className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              
              <button
                onClick={() => setActiveCommentPost(post.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary"
              >
                <ChatBubbleLeftIcon className="w-5 h-5" />
                <span>{post.comments.length}</span>
              </button>
            </div>

            {activeCommentPost === post.id && (
              <div className="mt-4 border-t pt-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addComment(post.id, commentText);
                    setCommentText('');
                    setActiveCommentPost(null);
                  }}
                  className="space-y-3"
                >
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Share your thoughts..."
                  />
                  <button type="submit" className="btn btn-primary">
                    Post Comment
                  </button>
                </form>

                <div className="mt-4 space-y-3">
                  {post.comments.map(comment => (
                    <div key={comment.id} className="p-3 rounded-md">
                      {comment.text}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;