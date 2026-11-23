import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <article className="article">
      <h1 className="article__title">404 — Страница не найдена</h1>
      <p className="article__paragraph">
        Такой страницы не существует.{' '}
        <Link to="/" className="article__link">
          На главную
        </Link>
      </p>
    </article>
  );
}
