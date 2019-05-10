<h1 align="center">
Simon Game - Testing
</h1>

<div align="center">

[**Main README.md file**](README.md)

[**View Simon Game page!**](https://charliejt.github.io/Simon-Memory-Game/)
</div>

## Contents Table

1. [**Automated Testing**](#automated-testing)
    - [**Validating Code**](#validating-code)
    - [**Jasmine Testing**](#jasmine-testing)

2. [**User Stories Testing**](#user-stories-testing)
3. [**Manual Testing**](#manual-testing)
    - [**Testing on Desktop**](#testing-on-desktop)
    - 


## Automated Testing

### Validating Code

Validation services were used to ensure that code was valid code used to develop the website.

- [W3C Markup Validation Service](https://validator.w3.org/) was used to test HTML code to ensure it was valid code.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to test CSS code to ensure it was valid code.
- [Code Beautify JavaScript Validator](https://codebeautify.org/jsvalidate) was used to test CSS code to ensure it was valid code.

### Jasmine Testing

As this was the first time using JavaScript and Jasmine testing, I thought it would be better to write my
JavaScript first and then run Jasmine testing afterwards as learning the two simultaneously would have been
very difficult to do. So I began by manually testing my JavaScript through the console and then using
Jasmine testing to ensure tests were passing.

I tested using Jasmine, taking it one step at a time. I would get my tests to first fail and then get them to
pass to ensure they were working as they should be working. I generated a nice chunk of testing.

Also, [Jasmine-Jquery CDN](https://github.com/velesin/jasmine-jquery) has been added to my jasmine html to ensure Jasmine
can test JQuery too.

The intention is to learn more about Jasmine testing and the uses you can get out of it so I can incorporate
extra testing in to projects in the future.

Files used for Jasmine testing:

- The HTML page where all of the Jasmine testing tools are stored: [**jasmine.html**](assets/jasmine-testing/jasmine.html)
- The JavaScript spec where the tests are run: [**simonSpec.js**](assets/jasmine-testing/spec/simonSpec.js)
- The JavaScript code being tested: [**simon.js**](assets/js/simon.js)

#### Running Jasmine tests

If you haven't already, follow the steps in the [Main README.md file](README.md) named 'To add this repository to your local workspace'
in the 'Deployment' section. Ensure you have the whole project up and running in your local workspace.

- **Run the Jasmine tests by:**

    - Opening up the [jasmine.html](assets/jasmine-testing/jasmine.html)
    - Click run and view the test results in the browser.
 
- **Creating Jasmine tests**

    - Open up [simonSpec.js](assets/jasmine-testing/spec/simonSpec.js).
    - Create your own tests using the Jasmine 3.1 framework.
    - Opening up the [jasmine.html](assets/jasmine-testing/jasmine.html) and click run to view the test results in the browser.

## User Stories Testing

This follows on from each of the **'User Stories'** items from the **'UX'** section in [README.md](README.md).

- ### As a player, I'd like to see:
    - ### A professional and strong looking game to draw the player into playing.
        - The board has been created with a clear and distinct separation of each colour.
        - A colour tone has been added to each to give it a slightly 3D look.
        - 'Game-Info' box is added right above the board for easy availability and access.
        - A beautiful retro looking font to give the game an original feel.
    - ### Simple and easy to use controls to ensure that the game is not difficult to control.
        - Controls are nicely spaced apart and labelled with their relevant label.
        - Coloured and styled for their primary purpose.
        - Slider styled with a green and grey colour scheme as an indicator of showing when it's active and not active.
        - Only requiring a simple click for each control to take action.
    - ### Different coloured pads which have a different sound for each pad as a clear distinction between each pad.
        - A different note has been applied to each pad when clicked or when the computer is generating a sequence for the player to follow.
    - ### An information window showing clear information about how the game is played to avoid confusion.
        The 'Game-Info' modal contains information on the following subjects.
        - **Objectives:** To let the player know how the game is played and the ideal goal.
        - **Rules for Winning:** A breakdown of the steps you need to follow to make a 'Win' possible.
        - **Buttons:** A listing of what each of the buttons represents and their function.
    - ### A sense of achievement and a goal to strive for whilst playing the game.
        - A winning modal has been added to the game for when the player follows 20 correct sequences from start to finish without making a single mistake.
    - ### Professional sounds which give a nice feel to their specific purpose.
        Professional sounds have been applied to the game to give a clear indicator of their intended use.
        - **Green Pad:** A 'ding' noise which produces the note (D#).
        - **Red Pad:** A 'ding' noise which produces the note (G).
        - **Yellow Pad:** A 'ding' noise which produces the note (A#).
        - **Blue Pad:** A 'ding' noise which produces the note (D#) in a higher pitch.
        - **When a player loses:** When the losing modal appears, a losing noise is produced to indicate the sound of losing.
        - **When a player wins:** When the winning modal appears, a winning noise is produced to indicate the sound of winning.
    - ### Different settings of play so the player can play to a level they are comfortable with.
        A Strict slider has been added to the game so that the player can pick a play that best suits them.
        - **Strict Mode (active):** When strict mode is active, the player will not be allowed to get a single sequence wrong, 
        if they do they will lose.Winning the game is possible when strict mode is active.
        - **Strict Mode  (not active):** When strict mode is not active, if the player gets a sequence wrong,
        the game will repeat the sequence over and over again until the player follows correctly. 
        You will then move on to the next sequence. Winning the game is not possible when strict mode is not active.

## Manual Testing

A number of manual tests were done to ensure the website was working with it's intended purpose and use.

### Testing on Desktop

The website was tested numerous times in Browsers: Chrome, Safari, FireFox and Internet Explorer
on a Laptop, Macbook & Desktop PC.

#### 1. Dashboard

I checked that:

- Simon board was sitting correctly on the page.
- The number counter was displaying "-".
- None of the pads were clickable and no cursors were disable when hovering over the pads.
- The background was fixed when scrolling up and down on the page.
- The header and the footer where both sitting correct.
- When hovering over the start button and strict button, there was a cursor that appeared to indicate that they're both clickable.
- All spelling was correct and text was sitting where it should be.
- "Game-Info" button was positioned just above the Simon Board.
- All controls and displays were sitting correctly on the page.

#### 2. 'Game-Info Modal'

**I checked that:**

- It was positioned correct on the page when it's opened.
- Background display is appearing.
- All spelling was correct, all fonts are correct and text was sitting where it should be.
- Scroll icon has a cursor when hovering over, has direction animation and scrolls down to the bottom of the modal when it's clicked.
- Closing items are sitting and closing correctly, the close button at the bottom slightly darkens in colour when hovered over and 
is slightly reduced in size when clicked to indicate it's been clicked.
- All bullet points are in the correct position.
- 