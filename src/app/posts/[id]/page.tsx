import { Post } from '../../../types/post';

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  
  return res.json();
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">{post.title}</h1>
        <div className="text-sm text-indigo-600 mb-6">
          Post ID: {post.id} | User ID: {post.userId}
        </div>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>
      </article>
    </div>
  );
} 