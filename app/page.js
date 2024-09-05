import Link from "next/link";
import MovieCart from "../components/MovieCard";
import SectionTitle from "../components/SectionTitle";
import getTop10ThisWeek from "./api/getTop10ThisWeek";
import getPopularMovies from "./api/getPopularMovies";

export default async function Home() {
  const top10 = await getTop10ThisWeek();

  return (
    <div className="p-4 bg-gray-900">
      <div className="flex flex-row justify-between items-center">
        <SectionTitle title={"Top 10 this week"} />
        <Link className="text-blue-600" href={"/top-10-this-week"}>
          see all
        </Link>
      </div>

      <section className="flex flex-row overflow-scroll gap-6">
        {top10?.data?.map((movie, i) => {
          return (
            <MovieCart
              key={movie?.id}
              title={movie?.titleText.text}
              index={i + 1}
              rating={movie?.ratingsSummary?.aggregateRating}
              year={movie?.releaseYear?.year}
              id={movie?.id}
            />
          );
        })}
      </section>
    </div>
  );
}
