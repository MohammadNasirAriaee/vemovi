import { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useEffect(() => {
    document.title = `${title} / Cinemate`;
  });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start other:justify-evenly flex-wrap">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};
