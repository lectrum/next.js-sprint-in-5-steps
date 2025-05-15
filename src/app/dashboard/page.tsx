const getFooterData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!response.ok) return null;
  return response.json();
};

const getNewsData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });
  if (!response.ok) return [];
  const posts = await response.json();
  return posts.slice(0, 3);
};

const getUserData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store',
  });
  if (!response.ok) return null;
  return response.json();
};

const DashboardPage = async () => {
  const [footerData, newsData, userData] = await Promise.all([
    getFooterData(),
    getNewsData(),
    getUserData(),
  ]);

  const footerGeneratedAt = new Date().toLocaleTimeString();
  const newsGeneratedAt = new Date().toLocaleTimeString();
  const userGeneratedAt = new Date().toLocaleTimeString();

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* User Data Block */}
        <section className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Дані користувача</h2>
          {userData && (
            <div className="space-y-2">
              <p>Ім`я: {userData.name}</p>
              <p>Email: {userData.email}</p>
            </div>
          )}
          <p className="mt-4 text-sm text-gray-500">
            Оновлено о {userGeneratedAt}
          </p>
        </section>

        {/* News Data Block */}
        <section className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Останні новини</h2>
          <ul className="space-y-2">
            {newsData.map((post: { id: number; title: string }) => (
              <li key={post.id} className="p-2 border-b">
                {post.title}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Оновлено о {newsGeneratedAt}
          </p>
        </section>

        {/* Footer Data Block */}
        <section className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Футер</h2>
          {footerData && (
            <div className="space-y-2">
              <p>{footerData.title}</p>
              <p className="text-sm text-gray-600">{footerData.body}</p>
            </div>
          )}
          <p className="mt-4 text-sm text-gray-500">
            Згенеровано о {footerGeneratedAt}
          </p>
        </section>
      </div>
    </main>
  );
};

export default DashboardPage; 