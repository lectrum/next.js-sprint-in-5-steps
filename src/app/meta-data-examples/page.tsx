import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO-стаття: Як покращити видимість сайту в Google",
  description: "Детальна SEO-стаття про основні принципи оптимізації сайту для пошукових систем.",
};

const MetadataPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center py-12 px-4">
      <article
        className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6"
        tabIndex={0}
        aria-label="SEO-стаття: Як покращити видимість сайту в Google"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2" tabIndex={0} aria-label="Заголовок статті">
          SEO-стаття: Як покращити видимість сайту в Google
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4" tabIndex={0} aria-label="Підзаголовок">
          Основні принципи оптимізації для пошукових систем
        </h2>
        <section className="flex flex-col gap-4">
          <p className="text-gray-800" tabIndex={0} aria-label="Вступ статті">
            SEO (Search Engine Optimization) — це комплекс заходів, спрямованих на підвищення позицій сайту у результатах пошукових систем. Якісна оптимізація допомагає залучити більше цільових відвідувачів та збільшити конверсію.
          </p>
          <p className="text-gray-800" tabIndex={0} aria-label="Порада 1">
            <span className="font-semibold">1. Дослідження ключових слів:</span> Визначте, які запити використовують ваші потенційні клієнти, та інтегруйте їх у контент сайту.
          </p>
          <p className="text-gray-800" tabIndex={0} aria-label="Порада 2">
            <span className="font-semibold">2. Оптимізація контенту:</span> Створюйте унікальні, корисні та структуровані тексти. Використовуйте заголовки (h1, h2, h3) для логічної організації інформації.
          </p>
          <p className="text-gray-800" tabIndex={0} aria-label="Порада 3">
            <span className="font-semibold">3. Технічна оптимізація:</span> Переконайтеся, що сайт швидко завантажується, має адаптивний дизайн та коректно індексується пошуковими системами.
          </p>
        </section>
      </article>
    </main>
  );
};

export default MetadataPage; 
