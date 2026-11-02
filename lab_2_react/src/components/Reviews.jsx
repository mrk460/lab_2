import { useEffect, useState } from 'react';

const VARIANT = 17; // номер варіанта = номер у журналі

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadComments() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        setComments(await response.json());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadComments();
  }, []); // порожній масив — запит виконується один раз при монтуванні

  if (loading) return <p>Завантаження відгуків…</p>;
  if (error) return <p>Не вдалося завантажити відгуки: {error}</p>;

  return (
    <section className="reviews">
      <h2>Відгуки колишніх роботодавців</h2>
      {comments.map(c => (
        <article className="review" key={c.id}>
          <h3>{c.name}</h3>
          <p className="author">{c.email}</p>
          <p>{c.body}</p>
        </article>
      ))}
    </section>
  );
}

export default Reviews;
