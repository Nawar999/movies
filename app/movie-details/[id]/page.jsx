import Image from "next/image";
import { getMovieById } from "@/app/api/getMovieById";
import { Suspense } from "react";
import Divider from "@/components/Divider";

const MovieDetailsPage = async ({ params }) => {
  const { data } = await getMovieById(params?.id);
  console.log(data);
  const { image, year, title, stars, q } = data[0];

  return (
    <div className="p-5 bg-gray-900">
      <Suspense
        fallback={
          <h1 className="text-white text-4xl text-center ">loading...</h1>
        }
      >
        <Header year={year} title={title} />
        <Details q={q} img={image} />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

function Header({ title, year }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-2xl">{title}</h1>
      <div className="flex flex-row gap-3">
        <h1 className="text-white">{year}</h1>
        <h1 className="text-white">R</h1>
        <h1 className="text-white">1h 59m</h1>
      </div>
    </div>
  );
}

function Trailer() {
  return <></>;
}

function Details({ q, img }) {
  return (
    <div>
      <header className="flex flex-row gap-5">
        <Image src={img} width={150} height={150} alt="" />
        <div>
          <div className="text-white border-white border-1 bg-red-400 rounded-2xl w-min p-1">
            {q}
          </div>
          ;
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem
            consectetur pariatur repellendus accusamus repellat harum nostrum
          </p>
        </div>
      </header>
      <div>
        <div className="mt-6">
          <Divider />
          <h1 className="text-white text-lg ">Director: test</h1>
          <Divider />
          <h1 className="text-white text-lg">Writers: test</h1>
          <Divider />
          <h1 className="text-white text-lg">Stars: test</h1>
          <Divider />
        </div>
      </div>
      <div className="bg-yellow-500 w-full rounded-lg mt-5 h-14 text-center text-2xl flex justify-center items-center ">
        Add to watchlist
      </div>
    </div>
  );
}
