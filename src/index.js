let instance;
class Revew {
    constructor({
      position = 'bottom-right',
      primaryColor = '#41c19e',
      secondaryColor = '#fff',
    } = {}) {
      this.position = this.getPosition(position);
      this.primaryColor = primaryColor;
      this.secondaryColor = secondaryColor;
      this.open = false;
      this.initialise();
      this.createStyles();
      if (instance) {
        throw new Error("You can only create one instance of revew widget! 💔");
      }
      instance = this;
    }
     if(!instance){
      console.log('you are lucky man! you have no instance in realll')
     }
  
    getPosition(position) {
      const [vertical, horizontal] = position.split('-');
      return {
        [vertical]: '30px',
        [horizontal]: '30px',
      };
    }
  
    initialise() {
      const container = document.createElement('div');
      container.style.position = 'fixed';
      Object.keys(this.position).forEach(
        (key) => (container.style[key] = this.position[key])
      );
      document.body.appendChild(container);
  
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
  
      const chatIcon = document.createElement('img');
      chatIcon.src = 'https://i.ibb.co/z8Lp7CK/star.png';
      chatIcon.classList.add('revew-icon');
      this.chatIcon = chatIcon;
  
      const closeIcon = document.createElement('img');
      closeIcon.src = 'https://i.ibb.co/8sVRbDb/cross.png';
      closeIcon.classList.add('revew-icon', 'hidden');
      this.closeIcon = closeIcon;
  
      buttonContainer.appendChild(this.chatIcon);
      buttonContainer.appendChild(this.closeIcon);
      buttonContainer.addEventListener('click', this.toggleOpen.bind(this));
  
      this.messageContainer = document.createElement('div');
      this.messageContainer.classList.add('hidden', 'review-container');
  
      this.createMessageContainerContent();
  
      container.appendChild(this.messageContainer);
      container.appendChild(buttonContainer);
    }
  
    createMessageContainerContent() {
      this.messageContainer.innerHTML = '';
      const title = document.createElement('h3');
      title.textContent = `Give your Feedback about us on Revew`;
  
      const form = document.createElement('form');
      form.classList.add('content');
      const email = document.createElement('input');
      email.required = true;
      email.id = 'email';
      email.type = 'email';
      email.placeholder = 'Enter your email address';
  
      const review = document.createElement('textarea');
      review.required = true;
      review.id = 'review';
      review.placeholder = 'Your Review';
  
      const reviewScore = document.createElement('div');
      reviewScore.classList.add('rate');
      const singleReviewScore = (value) => {
        return `<input type="radio" id="star${value}" name="rate" value='${value}' />
               <label for="star${value}" title="${value} Star">${value} stars</label>`;
      };
  
      const reviewStarsInput = [1,2,3,4,5]
        .map((item) => {
          return singleReviewScore(item );
        })
        .reverse()
        .join('');
  
      reviewScore.insertAdjacentHTML('afterbegin', reviewStarsInput);
  
      const btn = document.createElement('button');
      btn.textContent = 'Submit';
      form.appendChild(email);
      form.appendChild(review);
      form.appendChild(reviewScore);
      form.appendChild(btn);
      form.addEventListener('submit', this.submit.bind(this));
  
      const loader = document.createElement('div');
      loader.classList.add('lds-ripple');
      loader.innerHTML = `<div></div><div></div>`;
      loader.addEventListener('fetchStart', () => {
        loader.style.display = 'block';
      });
      loader.addEventListener('fetchEnd', () => {
        loader.style.display = 'none';
      });
      this.messageContainer.appendChild(title);
      this.messageContainer.appendChild(form);
      this.messageContainer.appendChild(loader);
    }
  
    createStyles() {
      const styleTag = document.createElement('style');
      styleTag.innerHTML = `
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

* {
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

body {
    background-color: var(--palegreen);
}

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


              .revew-icon {
                  cursor: pointer;
                  width: 70%;
                  position: absolute;
                  top: 9px;
                  left: 9px;
                  transition: transform .3s ease;
              }
              .hidden {
                  transform: scale(0);
              }
              .button-container {
                  background-color: ${this.secondaryColor};
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                  box-shadow: 2px 2px 8px 1px ${this.primaryColor};
              }
              .review-container {
                  box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
                  width: 400px;
                  right: -25px;
                  bottom: 75px;
                  max-height: 400px;
                  position: absolute;
                  transition: max-height .2s ease;
                  font-family: 'Ubuntu Mono', monospace;
                  border-radius: .5em;
                  background: ${this.secondaryColor}
              }
         
              .review-container.hidden {
                  max-height: 0px;
              }
              .review-container h3 {
                  margin: 0;
                  padding: 20px 20px;
                  color: ${this.secondaryColor};
                  background-color: ${this.primaryColor};
              }
              .review-container .content {
                  margin: 20px 10px ;
                  padding: 10px;
                  display: flex;
                  background-color: ${this.secondaryColor};
                  flex-direction: column;
              }
              .review-container form * {
                  margin: 5px 0;
              }
              .review-container form input {
                  padding: 10px;
              }
              .review-container form textarea {
                  height: 100px;
                  padding: 10px;
              }
              .review-container form > textarea, input {
                  outline-color: ${this.primaryColor};
                  border: .5px solid ${this.primaryColor};
                  font-family: 'Ubuntu Mono', monospace;
                  border-radius: .2em;
              }
              .rate {
                  float:left;
                  height: 46px;
                  padding: 0 10px;
              }
              .rate:not(:checked) > input {
                  position:absolute;
                  top:-9999px;
              }
              .rate:not(:checked) > label {
                  float:right;
                  width:1em;
                  overflow:hidden;
                  white-space:nowrap;
                  cursor:pointer;
                  font-size:30px;
                  color:#ccc;
              }
              .rate:not(:checked) > label:before {
                  content: '★ ';
              }
              .rate > input:checked ~ label {
                  color: ${this.primaryColor};    
              }
              .rate:not(:checked) > label:hover,
              .rate:not(:checked) > label:hover ~ label {
                  color: ${this.primaryColor};  
              }
              .rate > input:checked + label:hover,
              .rate > input:checked + label:hover ~ label,
              .rate > input:checked ~ label:hover,
              .rate > input:checked ~ label:hover ~ label,
              .rate > label:hover ~ input:checked ~ label {
                  color: ${this.primaryColor};
              }
              .review-container form button {
                  cursor: pointer;
                  background-color: ${this.primaryColor};
                  color: ${this.secondaryColor};
                  border: 0;
                  border-radius: 4px;
                  padding: 10px;
              }
              .review-container form button:hover {
                  background-color: ${this.primaryColor};
              }
              .lds-ripple {
                  display: none;
                  width: 80px;
                  height: 80px;
                  position: absolute;
                   top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
                .lds-ripple div {
                  position: absolute;
                  border: 4px solid ${this.primaryColor};
                  opacity: 1;
                  border-radius: 50%;
                  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                }
                .lds-ripple div:nth-child(2) {
                  animation-delay: -0.5s;
                }
                @keyframes lds-ripple {
                  0% {
                    top: 36px;
                    left: 36px;
                    width: 0;
                    height: 0;
                    opacity: 1;
                  }
                  100% {
                    top: 0px;
                    left: 0px;
                    width: 72px;
                    height: 72px;
                    opacity: 0;
                  }
                }
          `.replace(/^\s+|\n/gm, '');
      document.head.appendChild(styleTag);
    }
  
    toggleOpen() {
      this.open = !this.open;
      if (this.open) {
        this.chatIcon.classList.add('hidden');
        this.closeIcon.classList.remove('hidden');
        this.messageContainer.classList.remove('hidden');
      } else {
        this.createMessageContainerContent();
        this.chatIcon.classList.remove('hidden');
        this.closeIcon.classList.add('hidden');
        this.messageContainer.classList.add('hidden');
      }
    }
  
    async submit(event) {
      event.preventDefault();
      document
        .querySelector('.lds-ripple')
        .dispatchEvent(new CustomEvent('fetchStart'));
      const { email, review, rate } = event.target;
      if (!(email.value && review.value && rate.value))
        return alert('Please fill everything input before submit');
      const formSubmission = {
        email: email.value,
        review: review.value,
        reviewStar: rate.value,
      };
  
      try {
        const sendFormData = await fetch('https://revews.herokuapp.com/review', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formSubmission),
        });
  
        this.messageContainer.innerHTML =
          '<h3>Thanks for your Review.</h3><p class="content">It means a lot! ⭐';
      } catch (err) {
        this.messageContainer.innerHTML =
          '<h3>Something went wrong, please try again';
      } finally {
       if(document.querySelector('.lds-ripple')){
          document
          .querySelector('.lds-ripple')
          .dispatchEvent(new CustomEvent('fetchEnd'));
       }
        setTimeout(() => {
          this.toggleOpen();
        }, 2000);
      }
  
      console.log(formSubmission);
    }
  }