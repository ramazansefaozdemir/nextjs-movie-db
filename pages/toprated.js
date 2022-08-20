import Head from "next/head";
import Link from "next/link";

function TopRated({ topRated }) {
    return <div className="toprated">
        <h2>Top Rated Films</h2>
        <Head>
            <title>Top Rated Films</title>
        </Head>
        <div className="toprated-inner">
            {topRated.results.map(topRatedFilms => (
                <Link href={`/film/${topRatedFilms.id}`}>
                    <a>
                        <h3>{topRatedFilms.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${topRatedFilms.poster_path}`}></img>
                    </a>
                </Link>
            ))}
        </div>
        <style jsx>{`
            .toprated {
                width: 1200px;
                margin: 0 auto;
                padding: 20px 0px;
                
                h2 {
                  font-size: 40px;
                  margin-bottom: 20px;
                }
  
                .toprated-inner {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 10px;
    
                  a {
                    width: calc(25% - 10px);
                    position: relative;
    
                    h3 {
                      font-size: 16px;
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      color: #fff;
                      background: linear-gradient(to top, #000, transparent);
                      padding: 50px 20px 20px 20px;
                    }
    
                    img {
                      width: 100%;
                    }
                  }
                }
              }
        `}</style>
    </div>
}

export async function getServerSideProps() {
    const req = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1adec9887bb3f08f31db4ba0a3fe5d8f&language=en-US&page=1`);
    const topRated = await req.json();
    return {
        props: {
            topRated
        }
    }
}

export default TopRated