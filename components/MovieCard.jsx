import React from "react";
import star from "../public/star.png";
import img from "../public/imge.jpg";
import Image from "next/image";
import WatchListBtn from "./WatchListBtn";
import Link from "next/link";

const MovieCard = ({ title, index, rating, year, id }) => {
  return (
    <Link href={`movie-details/${id}`}>
      <div className="flex min-w-max flex-col border-2 p-2 rounded-md gap-2">
        <Image src={img} height={400} width={300} alt="" />
        <div className="flex flex-row items-center gap-2">
          <Image src={star} height={20} width={20} alt="" />
          <h1 className="text-white">{rating}</h1>
        </div>
        <h1 className="text-xl text-white">{index + ". " + title}</h1>

        <h1 className="text-white">{year}</h1>
        <WatchListBtn />
      </div>
    </Link>
  );
};

export default MovieCard;
