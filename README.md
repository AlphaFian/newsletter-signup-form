# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- Mobile-first workflow

### What I learned

from this project, i learn some code are:

```css
ul[role="list"],
ol[role="list"] {
  list-style: none;
  margin: 0;
  padding: 0;
}
.checklist li::before {
  content: url("/assets/images/icon-list.svg");
  padding-top: 2px;
}
```

first i remove the text-style in ul element, then i use pseudo element ::before to add image. the idea is i want to be able styling the image padding top to make the image similar to the design.

```css
input:focus ~ .button {
  background: linear-gradient(
    90deg,
    rgba(255, 106, 58, 1) 0%,
    rgba(255, 82, 123, 1) 100%
  );
}
```

this code is to make the button element changing it's color when we focus to the input element

```js
e.preventDefault();
const email = emailInput.value.trim();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

i just learned this javascript code.

### Useful resources

- [Youtube: Kevin Powell](https://youtu.be/Z0duh-0xJ2Y?si=JO1osKWB1TUB_I9C) - This helped me to styling the ul element.
- [CSS Gradient - Generator, Maker, background](https://cssgradient.io) - This website helps to make a linear gradient color button

## Author

- Website - [Alfian](https://fanciful-valkyrie-25e8c7.netlify.app/)
- Frontend Mentor - [@AlphaFian](https://www.frontendmentor.io/profile/AlphaFian)
- LinkedIn - [@alfian](https://www.linkedin.com/in/ardan-alfian-528a761b6/)

## Acknowledgments

Thanks to me that always to try keep doing code.
