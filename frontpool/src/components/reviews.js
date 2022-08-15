export default function Reviews() {
    return (
        <div id="reviews" >
            <h2>Feedback from our clients</h2>
            <div className="review-container">
                <button id="left">Prev</button>
                <div className="review-card">
                    <blockquote className='review-text'>
                        The poolinc crew are so amazing at their jobs, they came to clean my pool and they did a very amazing job i had to pay double what we agreed on
                    </blockquote>
                    <cite className="review-owner">~ MA NIGGA ~</cite>
                </div>
                <button id="right">Next</button>
            </div>
        </div>
    )
}