import Link from "next/link";

export default function About(){
    return <div className="about">
        <h2>About</h2>
        <div className="about inner">
            <p>Prepared using next js. Api data is taken from <a href="https://www.themoviedb.org/" target="_blank">https://www.themoviedb.org/</a>.</p>
            <Link href="/">
                <a>
                    Turn Back
                </a>
            </Link>
        </div>
        <style jsx>{`
            .about {
                width: 1200px;
                margin: 0 auto;
                padding: 20px 0px;
                
                h2 {
                    font-size: 40px;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 20px;
                    margin-bottom: 20px;
                    a {
                        text-decoration: none;
                    }
                }

                a:visited {
                    color: darkred;
                }
            }
        `}</style>
    </div>
}