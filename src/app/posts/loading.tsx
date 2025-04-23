import Loading from '../../components/Loading';

export default function PostsLoading() {
  return (
    <div className="space-y-8">
      <div className="h-12 bg-gray-200 rounded w-1/3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <Loading />
          </div>
        ))}
      </div>
    </div>
  );
} 