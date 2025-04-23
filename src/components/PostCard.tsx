import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
  loading?: 'lazy' | 'eager';
}

export default function PostCard({ post, loading = 'lazy' }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-indigo-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.body}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-indigo-600">User ID: {post.userId}</span>
        <a 
          href={`/posts/${post.id}`}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
          loading={loading}
        >
          Read more →
        </a>
      </div>
    </div>
  );
} 