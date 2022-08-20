import Head from "next/head";
export default function FilmDetay({ movie }) {
    return (
         <div className="movie">
            <Head>
                <title>{movie.title}</title>
            </Head>
            <div className="cover" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}></div>
            <h3>{movie.title}</h3>
            <div className="summary">
                <p>{movie.overview}</p>
            </div>
            
            <style jsx>{`
                .movie {
                    width: 1200px;
                    margin: 0 auto;    
                    position: relative;
                    padding: 20px;

                    h3 {
                        font-size: 30px;
                        font-weight: bold;
                        margin-bottom: 20px
                    }

                    .summary {
                        font-size: 16px;
                        color: #666;
                        line-height: 1.7;
                    }

                    .cover {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 300px;
                        background-size: cover;
                        opacity: .3;
                        z-index: -1;

                        &::before {
                            content: '';
                            background: linear-gradient(to bottom, transparent, #ddd);
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=1adec9887bb3f08f31db4ba0a3fe5d8f&language=en-US`);
    const movie = await req.json();
    return {
        props: {
            movie
        }
    }
}