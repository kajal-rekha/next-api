import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Movies not fetched");
  return res.json();
};
const Movies = () => {
  const { data, error, isValidating } = useSWR("/api/movies", fetcher);

  const isLoading = !data && !error && isValidating;

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;

  return (
    <div>
      <h2>Movies</h2>
      {data.map((movie) => (
        <div key={movie.id}>
          <h3>
            {movie.title} - {movie.rating}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Movies;
