export default function Footer() {
    return <footer className='footer'>
        <div className="footerInfo">
            Powered by <a href="https://ramazanozdemir.com"> Ramazan Ozdemir</a>
        </div>
        <style jsx>{`
            .footer {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .footerInfo {
                color: #333;
                padding: 20px 20px;
                    a {
                        color: #333;
                        text-decoration: none;
                    }
            }
        `}</style>
    </footer>
}