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
    - [**Testing on tablet and mobile devices**](#testing-on-tablet-and-mobile-devices)
4. [**Bugs Found**](#bugs-found)
    - [**Bugs Solved**](#bugs-solved)
    - [**Bugs Unsolved**](#bugs-unsolved)
5. [**Further Testing**](#further-testing)

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

- The HTML page where all of the Jasmine testing tools are stored: [**jasmine.html**](assets/jasmine-testing/jasmine.html).
- The JavaScript spec where the tests are run: [**simonSpec.js**](assets/jasmine-testing/spec/simonSpec.js).
- The JavaScript code being tested: [**simon.js**](assets/js/simon.js).

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
- None of the pads were clickable and no cursors were disabled when hovering over the pads.
- The background was fixed when scrolling up and down on the page.
- The header and the footer were both sitting correctly.
- When hovering over the start button and strict button, there was a cursor that appeared to indicate that they're both clickable.
- All spelling was correct and the text was sitting where it should be.
- 'Game-Info' button was positioned just above the Simon Board.
- All controls and displays were sitting correctly on the page.

#### 2. 'Game-Info' Modal

I checked that:

- It was positioned correctly on the page when it's opened.
- Background display is appearing.
- A cursor appears when each button has been hovered over.
- All spelling was correct, all fonts are correct and the text was sitting where it should be.
- Scroll icon has a cursor when hovering over, has direction animation and scrolls down to the bottom of the modal when it's clicked.
- Closing items are sitting and closing correctly, the close button at the bottom slightly darkens in colour when
hovered over and is slightly reduced in size when clicked to indicate it's been clicked.
- All bullet points are in the correct position.

#### 3. 'Lose' Modal

I checked that:

- Losing sound is produced when the modal displays.
- It was positioned correctly on the page when it's opened.
- Background display is appearing.
- The score appears with the correct score in the number display of the modal.
- All spelling was correct, all fonts are correct and the text was sitting where it should be.
- The start button is slightly darkened when hovered over and that the modal closes and a new game will begin when the button is clicked.
- Closing items are sitting and closing correctly, the close button at the bottom slightly darkens in colour when hovered over and is
slightly reduced in size when clicked to indicate it's been clicked.

#### 4. 'Win' Modal

I checked that:

- Winning sound is produced when the modal displays.
- It was positioned correctly on the page when it's opened.
- Background display is appearing.
- The maximum score appears with the correct score in the number display of the modal.
- All spelling was correct, all fonts are correct and the text was sitting where it should be.
- The start button is slightly darkened when hovered over and that the modal closes and a new game will begin when the button is clicked.
- Closing items are sitting and closing correctly, the close button at the bottom slightly darkens in colour when hovered over and is
slightly reduced in size when clicked to indicate it's been clicked.

#### 5. Start Buttons

I checked that:

- Number display was displaying "0" when start is pressed to begin a new game.
- The start buttons in modals work in the same fashion as the start button on the Simon board.
- The first sequence is being generated when the button has been clicked.
- No matter where the player is in the game. When the Start button is clicked, the game will begin a new game
without any bugs occurring.
- The start button accounts for fast and multiple clicks at a time, no matter fast or how many times the start button is
clicked. It will still begin a new game on the last click.

#### 6. Strict Slider

I checked that:

- The strict slider is in 'active' state when the page is loaded so that it has the same default setting as the original game.
- The slider is green when it's active and grey when it's not active.
- The label is sitting just above the slider to indicate what the slider is.
- When the page has been loaded, no matter how many times you click the strict slider on and off, the number display will appear as
- '-' until a new game is started.
- When a game has already been played once or more time and you click the strict slider on and off, the number display will appear as
'0'.
- There are no bugs in the game if there is a sudden interruption from the strict button. Whether the strict button is made
active, not active, whether a light is on, whether a light is off, whether it's the computer turn or whether it's the players turn,
whether a game is being played or not.

**When Switched from active to not active**:
    
- Whilst the game is in play and a play is switched from active to not active, there will be no disruption to the play of the
game. However, it will not be possible for you to win the game until you begin a new game in strict mode.
- If a game has been played and stopped, the display will stay on the current score that's being shown in the number display.

**When Switched from not active to active**:
    
- Whilst the game is in play and the strict slider is switched from none active to active, the game will be ended and the number display will
start back at '0', this is to prevent the following reasons:
    - Getting to a high number when strict mode is not active and then clicking to be active and winning the game easily,
    the winning option is intended to feel rewarding and not cheated.
    - If your score is higher than 20 when strict mode is not active and then suddenly you activate it, 
    you will be able to achieve a higher number than the original winning number.

#### 7. When the game is in play

I checked that:

- When a computer sequence is being generated, the pads are deactivated at all times meaning that when you click on any of the pads,
they will not do anything.
- As soon as the last sequence has been generated by the computer, the pads are then active and will allow you to click on them.
- When a sequence is wrong. All lights are flashed, the number counter displays 'Lose!', a losing sound is generated and a losing modal appears with your score.
- When a game is won. All lights are flashed, the number counter displays 'WIN!', a winning sound is generated and a winning modal appears with the maximum score.
- When a sequence is correct. All pads are disabled, the number counter display is incremented by 1 and the computer sequence is also incremented by 1.
- Each pad produces a completely random pattern with each sequence and with each time the player plays a game.
- The same sequence plus 1 extra random pattern is added to the turn with each turn of the game.
- There are no unnecessary glitches such as lighting or sound glitches that can be produced when the pads are pressed too quickly.

### Testing on tablet and mobile devices

The website was tested on iPhone 6, iPhone 8 Plus through Chrome and Safari. It's also been run through Chrome Developer tools
in the 'Responsive' setting changing the width and height and changed to each device setting.

#### 1. Dashboard

I checked that:

- All functions work the same on mobile and tablet as they do on a desktop.
- The Simon board fits nicely within the page on smaller displays.
- Everything is large enough to be able to read and click on smaller displays.
- No faults were occurring when scrolling up and down the page.
- All features are not positioned incorrectly when checking on different displays, ie. each feature is
still correctly positioned in its relevant position and not 'floating' off.
- Paddings, margins etc. are not having a negative effect on how everything is displayed.

#### 2. 'Game-Info' Modal

I checked that:

- All functions work the same on mobile and tablet as they do on a desktop.
- The Modal fits nicely within the page on smaller displays.
- Everything is large enough to be able to read and click on smaller displays.
- No faults were occurring when scrolling up and down the modal.
- Text is not too large for the reader to have to do a lot of scrolling to read the content
written in the modal. Or that is unnecessary overlapping with text.
- Paddings, margins etc. are not having a negative effect on how everything is displayed.

#### 3. 'Lose' Modal

I checked that:

- The start button and close button works the same as on desktop display.
- The Modal fits nicely within the page on smaller displays.
- Everything is large enough to be able to read and click on smaller displays.
- Text is not too large for the reader to have to do a lot of scrolling to read the content
written in the modal. Or that is unnecessary overlapping with text.
- The score number being generated as the correct number.
- A losing sound is being generated when the losing modal displays.

#### 4. 'Win' Modal

I checked that:

- The start button and close button works the same as on desktop display.
- The Modal fits nicely within the page on smaller displays.
- Everything is large enough to be able to read and click on smaller displays.
- Text is not too large for the reader to have to do a lot of scrolling to read the content
written in the modal. Or that is unnecessary overlapping with text.
- The winning number is generated as the correct number.
- A winning sound is being generated when the winning modal displays.

#### 5. Start Buttons

I checked that:

- All functions work the same on mobile and tablet as they do on a desktop.
- Buttons are not too small for them to be clicked on or read.
- Buttons are not too large where they look too big for the display.
- Text size is maintained to an appropriate size for the button.
- Buttons still have the same clicking effect when they are clicked.
- Paddings, margins etc. are not having a negative effect on how everything is displayed.
- Start button on Simon board is not having unnecessary floating issues.

#### 6. Strict Slider

I checked that:

- All functions work the same on mobile and tablet as they do on a desktop.
- The slider still slides from each side an appropriate amount and doesn't slide too little or too much.
- Colours are still kept when active and not active.
- Text size is maintained to an appropriate size for the slider.
- Paddings, margins etc. are not having a negative effect on how everything is displayed.
- Start button on Simon board is not having unnecessary floating issues.

#### 7. When the game is in play

I checked that:

- All functions work the same on mobile and tablet as they do on a desktop.
- Lights and sounds are being generated properly with the correct amount of time delay.
- No bugs are being generated when a pad is clicked or that a click of anything else with not cause an
unnecessary glitch with the game.


## Bugs Found

### Bugs Solved

1. #### Error with clicking a pad when a computer was generating a sequence and when the game isn't in play.

    There was an issue with the pads still being clickable when a computer sequence was being generated & when the game wasn't in play.
    This caused many glithes with the game such as 'Lose' symbols showing and pad lights spiralling out of control.

    **How it was fixed**:

    - I added `pointer-events` under the class of `disabled` in CSS & added the class to an if statement saying its computers turn,
    then add the class of `disabled`, a `setTimeout` function is added to remove the class after 299 seconds.
    so the pad is clickable when the computer generator has finished sequence.

    - A time of 300 was set to remove the class but it was causing a lighting glitch where the final light produced remained on.
    299 seconds worked absolutely fine.
    <br>

    ``` css
    .disabled {
    pointer-events: none;
    }
    ```
    ``` javascript
    $(".pad").addClass('disabled');
    $(".pad").removeClass('disabled');
    ```

2. #### Error with light continuing to stay on when the strict button is clicked whilst a game is in play.

    There was an issue where the light was staying on when the strict button was pressed. It happened when the play of a game was interrupted when a computer sequence was being generated. The exact point it would happen is when
    a light had just finished flashing and then the strict slider was quickly toggled on, off and back on again, the next light
    that was produced would stay on permanently.

    **How it was fixed**:

    - A `setTimeout` function with a function called `clearColor();` inside of it was added to clear the colour after a set time.
    The `clearColor();` removes any unnecessary lighting classes that were still added to each pad.
    <br>

    ``` javascript
    setTimeout(function() {
        clearColor();
    }, 600);
    ```

    ``` javascript
    function clearColor() {
        $(greenPad).removeClass("green-light");
        $(redPad).removeClass("red-light");
        $(yellowPad).removeClass("yellow-light");
        $(bluePad).removeClass("blue-light");
    }
    ```
    
3. #### Error with sounds when pads were pressed too quickly.

    An issue that couldn't get resolved for a while was when the pad was pressed and then another straight after, the pad sound
    was not being produced, it would only play the next sound if the entire audio on the previous pad had finished playing.

    **How it was fixed**:

    - A built-in `currentTime` function was added before the built-in `play` function so that the new audio file was reset to 0, 
    allowing it to be played from the start. This meant no matter how quickly the next pad was clicked after the previous. 
    The sound will still be produced.
    <br>
    
    ``` javascript
    let audio = document.getElementById("sound-green");
    audio.currentTime = 0;
    audio.play();
    ```
    
4. #### A for loop was limiting how many plays you could play.

    Initially, a 'for' loop was added to get a random number which was for example:
    ``` javascript
    for (i = 0; i < 20; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
    ```
    This was producing a random number with each cycle, however, where the number 20 is written, any number written would be the total plays
    the game would play up to. A really high number added to it was not a viable option as the higher the number, the slower
    the website would run. A new way needed to be thought of.

    **How it was fixed**:

    - A function called `getRandomNumber();` was created which took a random number and pushed it into the sequence.
    I then used this function in my `play();` function when beginning a game and in my `turn == playerSequence.length && correct && !win`
    if statement. This was a number better approach as there were no limits made by a for loop.
    <br>
    
    ``` javascript
    function getRandomNumber() {
        sequence.push(Math.floor(Math.random() * 4) + 1);
        console.log(sequence);
    }
    ```
    
### Bugs Unsolved

1. #### Sounds being produced in Safari.

    An issue was happening with sound clips in Safari where there would be a delay either be a delay with the sounds being played
    or not playing at all, I tried on iPhone and MacBook Pro and the same issue was occurring with both devices as Safari limits the
    amount of times the audio file can be played.
    
    Unfortunately, I could not figure a way around this issue. The game would be better suited for a mobile app. I will
    continue to research deeper into the issue and hopefully figure out a solution.
    
2. #### Sounds having a delay on devices or systems with slower speeds.

    When the game is played on slower devices or system with a slow speed. The light of a pad is flashed before the sound
    is played, signifying a slight delay with the sounds.
    
    I could not find a way around this issue unfortunately but I will continue to do research into resolving the delay.
    
3. #### Controls not rendering correctly in Mozilla Firefox and Internet Explorer correctly.

    When the website is opened up in Mozilla Firefox and Internet Explorer, the controls of the Simon Board are floating in
    different directions and not sitting correctly on the page.
    
    After trying to work out a section with vendor-prefixes. A solution was not found for this issue unfortunately, as stated
    in the 'Sounds being produced in Safari' section, the game would be better suited for a mobile app. I will continue to research in 
    to find out a solution to the problem.


## Further Testing

- Friends, family and fellow students were asked to check the website on all devices they had, they tested functionality and layout,
positive and constructive criticism was provided.
- Tested in Chrome DevTools on all different devices and by scrolling up and down in the responsive setting.