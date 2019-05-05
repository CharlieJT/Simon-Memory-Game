describe('play function', function() {

    beforeEach(() => {
        light = 0;
        turn = 1;
        correct = true;
        compTurn = true;
    });

    describe('value of each variable in play function', function() {

        it('should return light = 0', function() {
            play();
            expect(light).toBe(0);
        });

        it('should return turn = 1', function() {
            play();
            expect(turn).toBe(1);
        });

        it('should return correct = true', function() {
            play();
            expect(correct).toBe(true);
        });

        it('should return compTurn = true', function() {
            play();
            expect(compTurn).toBe(true);
        });
    });

    describe('classes of pads', function() {

        beforeEach(() => {
            setFixtures(`
            <div id="0" class="pad green-pad disabled"></div>
			<div id="1" class="pad red-pad disabled"></div>
			<div id="2" class="pad yellow-pad disabled"></div>
			<div id="3" class="pad blue-pad disabled"></div>
			<div id="number-counter" class="num-display">-</div>
            `);
        });

        describe('display on number display', function() {
            it('should return number counter to equal -', function() {
                let result = play();
                expect($("#number-counter").text()).toEqual("-");
            });
        });

        describe('disabled pads', function() {

            it('should return pad as having class disabled', function() {
                let result = play();
                expect('.pad').toHaveClass('disabled');
            });
        });

        describe('light on pads', function() {

            it('should return green-pad as not having class green-light', function() {
                let result = play();
                expect('.green-pad').not.toHaveClass('green-light');
            });

            it('should return red-pad as not having class red-light', function() {
                let result = play();
                expect('.red-pad').not.toHaveClass('red-light');
            });

            it('should return yellow-pad as not having class yellow-light', function() {
                let result = play();
                expect('.yellow-pad').not.toHaveClass('yellow-light');
            });

            it('should return blue-pad as not having class blue-light', function() {
                let result = play();
                expect('.blue-pad').not.toHaveClass('blue-light');
            });
        });
    });
});

describe('gameTurn function', function() {

    beforeEach(() => {
        compTurn = false;
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    describe('value of compTurn variable', function() {
        it('should return compTurn = false', function() {
            let result = gameTurn();
            expect(compTurn).toBe(false);
        });
    });

    describe('classes of pads', function() {
        it('should return pad as not having class disabled', function() {
            let result = gameTurn();
            jasmine.clock().tick(600);
            expect('.pad').not.toHaveClass('disabled');
        });
    });

    describe('lights on pads', function() {

        it('should return green-pad as having class of green-light', function() {
            let result = gameTurn();
            jasmine.clock().tick(600);
            expect('.green-pad').not.toHaveClass('green-light');
        });

        it('should return red-pad as having class of red-light', function() {
            let result = gameTurn();
            jasmine.clock().tick(600);
            expect('.red-pad').not.toHaveClass('red-light');
        });

        it('should return yellow-pad as having class of yellow-light', function() {
            let result = gameTurn();
            jasmine.clock().tick(600);
            expect('.yellow-pad').not.toHaveClass('yellow-light');
        });

        it('should return blue-pad as having class of blue-light', function() {
            let result = gameTurn();
            jasmine.clock().tick(600);
            expect('.blue-pad').not.toHaveClass('blue-light');
        });
    });
});

describe('clearColor function', function() {

    beforeEach(() => {
        setFixtures(`
            <div id="0" class="pad green-pad disabled"></div>
			<div id="1" class="pad red-pad disabled"></div>
			<div id="2" class="pad yellow-pad disabled"></div>
			<div id="3" class="pad blue-pad disabled"></div>
        `);
    });

    describe('lights on pads', function() {

        it('should return green-pad as not having class of green-light', function() {
            let result = clearColor();
            expect('.green-pad').not.toHaveClass('green-light');
        });

        it('should return red-pad as not having class of red-light', function() {
            let result = clearColor();
            expect('.red-pad').not.toHaveClass('red-light');
        });

        it('should return yellow-pad as not having class of yellow-light', function() {
            let result = clearColor();
            expect('.yellow-pad').not.toHaveClass('yellow-light');
        });

        it('should return blue-pad as not having class of blue-light', function() {
            let result = clearColor();
            expect('.blue-pad').not.toHaveClass('blue-light');
        });
    });
});


describe('lightAllColors function', function() {

    beforeEach(() => {
        setFixtures(`
            <div id="0" class="pad green-pad disabled green-light"></div>
			<div id="1" class="pad red-pad disabled red-light"></div>
			<div id="2" class="pad yellow-pad disabled yellow-light"></div>
			<div id="3" class="pad blue-pad disabled blue-light"></div>
        `);
    });

    describe('lights on pads', function() {

        it('should return green-pad as having class of green-light', function() {
            let result = clearColor();
            expect('.green-pad').toHaveClass('green-light');
        });

        it('should return red-pad as having class of red-light', function() {
            let result = clearColor();
            expect('.red-pad').toHaveClass('red-light');
        });

        it('should return yellow-pad as having class of yellow-light', function() {
            let result = clearColor();
            expect('.yellow-pad').toHaveClass('yellow-light');
        });

        it('should return blue-pad as having class of blue-light', function() {
            let result = clearColor();
            expect('.blue-pad').toHaveClass('blue-light');
        });
    });
});

describe('check function', function() {
    beforeEach(() => {
        setFixtures(`
            
        `);
        compTurn = true;
        sound = true;
        correct = true;
        light = 0;
    });

    describe('value of each variable in check function', function() {

        it('should return compTurn = false', function() {
            check();
            expect(compTurn).toBe(true);
        });

        it('should return sound = false', function() {
            check();
            expect(sound).toBe(true);
        });

        it('should return correct = true', function() {
            check();
            expect(correct).toBe(true);
        });

        it('should return light = 0', function() {
            check();
            expect(light).toBe(0);
        });

        describe('disabled pads', function() {

            it('should return pad as having class disabled', function() {
                let result = play();
                expect('.pad').not.toHaveClass('disabled');
            });
        });
    });
});
