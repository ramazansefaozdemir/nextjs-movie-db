import Link from 'next/link'

export default function Header(){
    return <header className='header'>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/upcoming">
                        <a>
                            Upcoming Films
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/toprated">
                        <a>
                            Top Rated
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
            .header {
                background: #fff;
                border-bottom: solid 1px #ccc;
            }
            ul {
                display: flex;
                justify-content: center;
                li {
                    a {
                        text-decoration: none;
                        display: flex;
                        padding: 0 20px;
                        height: 60px;
                        align-items: center;
                        color: #333;
                    }
                }
            }
        `
        }</style>
    </header>
}