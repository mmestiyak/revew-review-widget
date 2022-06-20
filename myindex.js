const formContainer = document.createElement('div');

formContainer.innerHTML = `
<style>
/* font family url */
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

/* custom css properties */
:root {
    --white: #ffffff;
    --palegreen: #f4fafa;
    --black: #202020;
    --gray: #757575;
    --gray-light: #d6d6d6;
    --green: #18a87c;
}

/* font-family: 'Manrope', sans-serif;
font-family: 'Maven Pro', sans-serif; */

// * {
//     margin: 0;
//     padding: 0;
// }

html {
    font-size: 62.5%;
}

// body {
//     background-color: var(--palegreen);
// }

.container {
    max-width: 1440px;
    margin: auto;
    padding: 0 1rem;
}
.form-wrapper {
    background-color: var(--white);
    border-radius: 1rem;
    padding: 2.4rem;
    max-width: 60rem;
    margin: 5rem auto 2.4rem auto;
}
.form-wrapper-heading {
    color: var(--black);
    font-size: 2.4rem;
    font-style: normal;
    font-family: "Maven Pro", sans-serif;
    line-height: 2.4rem;
    letter-spacing: 0.01em;
    margin: 0;
    text-align: center;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--gray-light);
    font-weight: 700;
    text-transform: capitalize;
}
.review-details {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
}
.review-product-img {
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
    object-fit: cover;
}

.review-product-info {
    margin-left: 1.2rem;
    position: relative;
}
.review-product-info-heading {
    color: var(--black);
    font-size: 2rem;
    font-style: normal;
    font-family: "Maven Pro", sans-serif;
    line-height: 2.4rem;
    letter-spacing: 0.01em;
    margin: 0;
    text-align: center;
    font-weight: 700;
    text-transform: capitalize;
    position: absolute;
    left: 0;
    top: 0;
}
.rating {
    margin-top: 1.5rem;
}
/* rating start */

.rate {
    height: 4.6rem;
}
.rate:not(:checked) > input {
    position: absolute;
    top: -9999px;
}
.rate:not(:checked) > label {
    float: right;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 3rem;
    color: var(--gray-light);
    margin: 2rem 2rem 0 0;
}
.rate:not(:checked) > label:before {
    content: "★";
}
.rate > input:checked ~ label {
    color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #ffc700;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #ffc700;
}

.input-form-desc {
    /* margin: 2.4rem; */
}
.input-wrapper {
    margin-top: 2.4rem;
}
.input-label {
    color: var(--black);
    font-size: 1.4rem;
    font-style: normal;
    font-family: "Maven Pro", sans-serif;
    line-height: 1.6rem;
    letter-spacing: 0.01em;
    margin: 0;
    font-weight: 600;
    text-transform: capitalize;
    display: block;
}
.input-field {
    font-family: "Manrope", sans-serif;
    color: var(--black);
    font-size: 1.4rem;
    font-style: normal;
    line-height: 2.4rem;
    letter-spacing: 0.01em;
    margin: 0;
    font-weight: 500;
    text-transform: capitalize;
    display: block;
    width: 100%;
    background-color: var(--palegreen);
    border-radius: 0.4rem;
    padding: 1.2rem;
    border: transparent;
    height: 4rem;
    margin-top: 1.2rem;
    border: 1px solid transparent;
}
.input-field:focus {
    outline: none;
    border: 1px solid var(--green);
}

textarea {
    resize: vertical;
    font-family: "Manrope", sans-serif;
    color: var(--black);
    font-size: 1.4rem;
    font-style: normal;
    line-height: 2.4rem;
    letter-spacing: 0.01em;
    margin: 0;
    font-weight: 500;
    text-transform: capitalize;
    display: block;
    width: 100%;
    background-color: var(--palegreen);
    border-radius: 0.4rem;
    padding: 1.2rem;
    border: transparent;
    margin-top: 1.2rem;
    border: 1px solid transparent;
}
textarea:focus {
    outline: none;
    border: 1px solid var(--green);
}

.uploaded-info {
    width: 14rem;
    height: auto;
    border-radius: 0.4rem;
    border: 2px dashed var(--gray-light);
    background-color: var(--palegreen);
    padding: 2.5rem 1.5rem;
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 1.2rem;
}
.uploader-img {
    width: 3.2rem;
    height: auto;
    margin: auto;
    object-fit: cover;
}
.uploader-title {
    font-family: "Maven Pro", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.01em;
    color: var(--black);
    margin: 1.2rem 0;
}
.uploader-info {
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 16px;
    letter-spacing: 0.005em;
    color: var(--gray);
    width: 77%;
    margin: auto;
}
.uploaded-link {
    color: var(--green);
}

/* css checkbox */
.styled-checkbox {
    position: absolute;
    opacity: 0;
}
.styled-checkbox + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    margin-left: 1.05rem;
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.9rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;

    /* App/Gray */

    color: var(--gray);
}

.styled-checkbox + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--white);
    border: 1px solid var(--gray-light);
    border-radius: 0.4rem;
}

.styled-checkbox:checked + label:before {
    background: var(--green);
    border: 1px solid var(--white);
}

.styled-checkbox:disabled + label {
    cursor: auto;
}

.styled-checkbox:disabled + label:before {
    box-shadow: none;
    background: var(--white);
}
.styled-checkbox:checked + label:after {
    content: "";
    position: absolute;
    left: 3px;
    top: 9px;
    background: var(--white);
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 var(--white), 4px 0 0 var(--white), 4px -2px 0 var(--white), 4px -4px 0 var(--white), 4px -6px 0 var(--white), 4px -8px 0 var(--white);
    transform: rotate(45deg);
}

.btn-body {
    margin-top: 2.4rem;
}
.btn-link {
    border-radius: 0.4rem;
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: -0.01em;
}
.btn {
    background: var(--green);
    width: 100%;
    height: 4rem;
    border: transparent;
    color: var(--white);
    cursor: pointer;
    border-radius: 0.4rem;
}



/* media breakpoint */
@media screen and (max-width: 430px) {
    .rate:not(:checked) > label {
        margin: 2rem 0.8rem 0 0;
        font-size: 2rem;
    }
}


</style>
<div class="form-wrapper">
<form>
    <h1 class="form-wrapper-heading">Write review</h1>
    <div class="review-details">
        <div class="review-product-img">
            <img src="./public/images/product-image.svg" class="review-product-img" alt="reviews product image">
        </div>
        <div class="review-product-info">
            <h1 class="review-product-info-heading">Product name</h1>
            <div class="rate rating">
                <input type="radio" id="star5" name="rate" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
              </div>
        </div>
    </div>
    <div class="input-form-desc">
        <div class="input-wrapper">
            <label class="input-label" for="name">Name</label>
            <input type="text" placeholder="Name" id="name" class="input-field">
        </div>
        <div class="input-wrapper">
            <label class="input-label" for="name">Email Address</label>
            <input type="text" placeholder="Email address" id="name" class="input-field">
        </div>
        <div class="input-wrapper">
            <label class="input-label" for="review_title">Review Title</label>
            <input type="text" placeholder="Review title" id="review_title" class="input-field">
        </div>
        <div class="input-wrapper">
            <label class="input-label" for="feedback">Your Feedback</label>
            <textarea type="text" rows="5" placeholder="Your feedback" id="feedback" class=""></textarea>
        </div>
        <div class="input-wrapper">
            <p class="input-label">Attachment</label>
            <div class="uploaded-info">
                <img class="uploader-img" src="./public/images/review-attachment-uploader.svg" alt="reviews Attachment uploader image">
                <p class="uploader-title">Add Photo/Video</p>
                <p class="uploader-info"><span class="uploaded-link">Upload</span> or drug & drop</p>
            </div>
        </div>
        <div class="input-wrapper">
            <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1">
                <label for="styled-checkbox-1">Mark as anonymous</label>
        </div>
        <div class="btn-body">
            <a href="#" class="btn-link">
                <button class="btn">Submit Review</button>
            </a>
        </div>
    </div>
</form>
</div>

`;

document.body.insertAdjacentElement('afterbegin', formContainer)