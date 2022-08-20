import Head from 'next/head';
import Link from 'next/link';

function Upcoming({ upcoming }){
    return <div className='upcoming'>
        <h2>Upcoming Movies</h2>
        <Head>
            <title>Upcoming Films</title>
        </Head>
        <div className='upcoming-inner'>
             {upcoming.results.map(upcomigFilms => (
                 <Link href={`/film/${upcomigFilms.id}`}>
                    <a>
                        <h3>{upcomigFilms.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${upcomigFilms.poster_path}`}></img>
                    </a>
                </Link>
            ))}
        </div>
        <style jsx>{`
             .upcoming {
                width: 1200px;
                margin: 0 auto;
                padding: 20px 0px;
                
                h2 {
                  font-size: 40px;
                  margin-bottom: 20px;
                }
  
                .upcoming-inner {
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
    const req = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1adec9887bb3f08f31db4ba0a3fe5d8f&language=en-US&page=1`);
    const upcoming = await req.json();
    return {
        props: {
            upcoming
        }
    }
}

export default Upcoming