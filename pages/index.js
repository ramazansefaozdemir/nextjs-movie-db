import Head from 'next/head'
import Popular from '../components/popular';

function Home({ movies }) {
  return (
    <>
        <Head>
          <title>The Movie DB - Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Popular movies={movies} />
    </>
  )
}

export async function getServerSideProps(){
  const req = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1adec9887bb3f08f31db4ba0a3fe5d8f&language=en-US&page=1");
  const movies = await req.json();
  return {
    props: {
      movies
    }
  }
}

export default Home