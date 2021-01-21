import React from 'react';
// import img from '../images'

function Seecond_section() {
    return (
        <section className="second_section">
            <div className="container">

                <h2>Latest Articles</h2>
                <div className="articles">
                    <article>
                        <img src="../images/image-currency.jpg" alt="image-currency"/>
                        <small>By Claire Robinson</small>
                        <h5>Receive money in any currency with no fees</h5>
                        <p>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive in a single...</p>
                    </article>
                    <article>
                        <img src="../images/image-currency.jpg" alt="image-currency"/>
                        <small>By Wilson Huntton</small>
                        <h5>Treat yourself without worrying about money</h5>
                        <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...</p>
                    </article>
                    <article>
                        <img src="../images/image-currency.jpg" alt="image-currency"/>
                        <small>By Wilson Huntton</small>
                        <h5>Take your Easybank card wherever you go</h5>
                        <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...</p>
                    </article>
                    <article>
                    <img src="../images/image-currency.jpg" alt="image-currency"/>
                        <small>By Claire Robinson</small>
                        <h5>Our invite-only Beta accounts are now live!</h5>
                        <p>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Seecond_section
