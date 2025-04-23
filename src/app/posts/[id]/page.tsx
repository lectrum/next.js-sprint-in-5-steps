import { Post } from '../../../types/post';
import { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then((res) => res.json());
  
  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  
  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  
  return {
    title: post.title,
    description: post.body.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.substring(0, 160),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.body.substring(0, 160),
    },
  };
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