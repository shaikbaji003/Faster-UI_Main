# Faster-UI_Main

Faster UI is a responsive web application that offers various services like web design, UI/UX design, responsive design, and custom development. This project showcases a sleek and modern user interface with a dark theme, designed for a web agency.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design with smooth scrolling for slider elements.
- Accordion-style FAQ section for interactive information display.
- Hamburger menu for easy navigation on mobile devices.
- Contact form for user inquiries.
- Pricing and service sections to display offerings.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/faster-ui.git
    ```

2. Navigate to the project directory:

    ```bash
    cd faster-ui
    ```

3. Open the `index.html` file in your preferred web browser to view the application.

## Usage

### Slider Navigation

- The slider elements can be navigated using the right and left arrows. The scroll amount is adjusted based on the window width.

### FAQ Accordion

- The FAQ section features expandable and collapsible content. Clicking on a question toggles the display of the corresponding answer.

### Hamburger Menu

- The navigation bar can be toggled on and off using the hamburger icon, making it mobile-friendly.

### Contact Form

- Users can fill out the contact form to send inquiries. The form includes fields for email, name, and message.

## Scripts

The JavaScript functionalities are contained in the `script.js` file. Here are some key functions:

### `arrowHandlerRight()`

```javascript
function arrowHandlerRight() {
    const widthWindow = window.innerWidth;
    const scrollableElement = document.getElementsByClassName("slider")[0];
    console.log(scrollableElement);
    scrollableElement.scrollBy({ left: widthWindow > 1250 ? 800 : 400, behavior: "smooth" });
}
