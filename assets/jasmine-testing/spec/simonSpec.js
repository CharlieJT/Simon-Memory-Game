describe('play function', function() {

    beforeEach(() => {
        light = 0;
        turn = 1;
        correct = true;
        compTurn = true;
    });

    describe('value of each variable in play function', function() {
        it('should return light = 0', function() {
            let result = play();
            expect(light).toBe(0);
        });

        it('should return turn = 1', function() {
            let result = play();
            expect(turn).toBe(1);
        });

        it('should return correct = true', function() {
            let result = play();
            expect(correct).toBe(true);
        });

        it('should return compTurn = true', function() {
            let result = play();
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
