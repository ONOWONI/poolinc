import React, { useState } from "react"
import reviewData from "../reviewData"
import ReviewModal from "./reviewModal"

export default function Reviews() {
    const [reviewDict, setReviewDict] = React.useState({
        review : "The poolinc crew are so amazing at their jobs, they came to clean my pool and they did a very amazing job i had to pay double what we agreed on",
        name : "MA NIGGA "
    })
    const [count, setCount] = React.useState(0)
    const [modal, setModal] = React.useState(false)

    function nextClick() {
        if (count < reviewData.length -1) {
            setCount(prev => prev + 1)
        } else {
            setCount(0)
        }
        setReviewDict(reviewData[count])
        console.log(count);
    }

    function prevClick() {
        if (count > 0 ) {
            setCount(prev => prev - 1)
        } else {
            setCount(reviewData.length -1)
        }
        setReviewDict(reviewData[count])
        console.log(count);
    }


    function closeModal(){
        setModal(false)
    }
    return (
        <div id="reviews" >
            <h2>Feedback from our clients</h2>
            <div className="review-container">
                <button id="left" onClick={prevClick}>Prev</button>
                <div className="review-card">
                    <blockquote className='review-text'>
                        {reviewDict.review}
                    </blockquote>
                    <cite className="review-owner">~ {reviewDict.name}~</cite>
                </div>
                <button id="right" onClick={nextClick}>Next</button>
            </div>
            <button className='header-contact' id='review-btn' onClick={() => setModal(true)}>Submit your review</button>
            <ReviewModal modal={modal} close={() => closeModal()} />
        </div>
    )
}