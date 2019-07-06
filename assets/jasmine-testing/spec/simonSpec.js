describe('initializeGame', function() {

    beforeEach(() => {
        turn = 1;
    });

    describe('value of each variable in initializeGame function', function() {

        it('should return turn = 0', function() {
            initializeGame();
            expect(turn).toBe(1);
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
                let result = initializeGame();
                expect($("#number-counter").text()).toEqual("-");
            });
        });

        describe('disabled pads', function() {

            it('should return pad as having class disabled', function() {
                let result = initializeGame();
                expect('.pad').toHaveClass('disabled');
            });
        });

        describe('light on pads', function() {

            it('should return green-pad as not having class green-light', function() {
                let result = initializeGame();
                expect('.green-pad').not.toHaveClass('green-light');
            });

            it('should return red-pad as not having class red-light', function() {
                let result = initializeGame();
                expect('.red-pad').not.toHaveClass('red-light');
            });

            it('should return yellow-pad as not having class yellow-light', function() {
                let result = initializeGame();
                expect('.yellow-pad').not.toHaveClass('yellow-light');
            });

            it('should return blue-pad as not having class blue-light', function() {
                let result = initializeGame();
                expect('.blue-pad').not.toHaveClass('blue-light');
            });
        });
    });
});

describe('gamePlay function', function() {

    beforeEach(() => {
        playerCount = 0;
        computerCount = 0;
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    describe('value of playerCount variable', function() {
        it('should return playerCount variable to be 0', function() {
            let result = gamePlay();
            expect(playerCount).toBe(0);
        });
    });
    
    describe('value of computerCount variable', function() {
        it('should return computerCount variable to be 0', function() {
            let result = gamePlay();
            expect(computerCount).toBe(0);
        });
    });

    describe('classes of pads', function() {
        it('should return pad as not having class disabled', function() {
            let result = gamePlay();
            jasmine.clock().tick(600);
            expect('.pad').not.toHaveClass('disabled');
        });
    });

    describe('lights on pads', function() {

        it('should return green-pad as having class of green-light', function() {
            let result = gamePlay();
            jasmine.clock().tick(600);
            expect('.green-pad').not.toHaveClass('green-light');
        });

        it('should return red-pad as having class of red-light', function() {
            let result = gamePlay();
            jasmine.clock().tick(600);
            expect('.red-pad').not.toHaveClass('red-light');
        });

        it('should return yellow-pad as having class of yellow-light', function() {
            let result = gamePlay();
            jasmine.clock().tick(600);
            expect('.yellow-pad').not.toHaveClass('yellow-light');
        });

        it('should return blue-pad as having class of blue-light', function() {
            let result = gamePlay();
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
            let result = addLightsToAllPads();
            expect('.green-pad').not.toHaveClass('green-light');
        });

        it('should return red-pad as not having class of red-light', function() {
            let result = addLightsToAllPads();
            expect('.red-pad').not.toHaveClass('red-light');
        });

        it('should return yellow-pad as not having class of yellow-light', function() {
            let result = addLightsToAllPads();
            expect('.yellow-pad').not.toHaveClass('yellow-light');
        });

        it('should return blue-pad as not having class of blue-light', function() {
            let result = addLightsToAllPads();
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
            let result = removeLightOnAllPads();
            expect('.green-pad').toHaveClass('green-light');
        });

        it('should return red-pad as having class of red-light', function() {
            let result = removeLightOnAllPads();
            expect('.red-pad').toHaveClass('red-light');
        });

        it('should return yellow-pad as having class of yellow-light', function() {
            let result = removeLightOnAllPads();
            expect('.yellow-pad').toHaveClass('yellow-light');
        });

        it('should return blue-pad as having class of blue-light', function() {
            let result = removeLightOnAllPads();
            expect('.blue-pad').toHaveClass('blue-light');
        });
    });
});

describe('checking function', function() {
    describe('light on pads', function() {

        it('should return green-pad as not having class green-light', function() {
            let result = initializeGame();
            expect('.green-pad').not.toHaveClass('green-light');
        });

        it('should return red-pad as not having class red-light', function() {
            let result = initializeGame();
            expect('.red-pad').not.toHaveClass('red-light');
        });

        it('should return yellow-pad as not having class yellow-light', function() {
            let result = initializeGame();
            expect('.yellow-pad').not.toHaveClass('yellow-light');
        });

        it('should return blue-pad as not having class blue-light', function() {
            let result = initializeGame();
            expect('.blue-pad').not.toHaveClass('blue-light');
        });
    });
});
