import React from 'react';

function First_section() {
    return (
        <section className="first_section">
            <div>
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <article>
                {/* svg */}
                <h4>Online Banking</h4>
                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </article>
            <article>
                {/* svg */}
                <h4>Simple Budgeting</h4>
                <p>See exactly wheere your money goes each month. Receive notifications when you're close to your hitting limits.</p>
            </article>
            <article>
                {/* svg */}
                <h4>Fast Onboarding</h4>
                <p>We don't do branches. Open your account in minutes online and start taking control of your finaces right away.</p>
            </article>
            <article>
                {/* svg */}
                <h4>Open API</h4>
                <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </article>
        </section>
    )
}

export default First_section
