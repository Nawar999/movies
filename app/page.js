
import Link from "next/link";
import MovieCart from "../components/MovieCard"
const data=[
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
  {name:"mission imp", img:"https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", rate:7.80, year:2020, cast:["tom", "jack"]}, 
]

export default async function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-row justify-between items-center" >
        <h1 className="text-2xl">Top 10 this week</h1>
      <Link className="text-blue-600" href={"/top-10-this-week"}>see all</Link>     
        

      </div>
  
      <section className="flex flex-row overflow-scroll gap-6">
        
      {data?.map((movie,i)=>{
        return <MovieCart movie={movie} index={i+1}/>
      })}
      </section>
    </div>
  );
}
