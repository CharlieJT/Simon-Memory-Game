describe('play function', function() {

    beforeEach(() => {
        light = 0;
        turn = 1;
        correct = true;
        compTurn = true;
    });

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


    describe('classes of pads', function() {

        beforeEach(() => {
            setFixtures(`
            <div id="0" class="pad green-pad disabled"></div>
			<div id="1" class="pad red-pad disabled"></div>
			<div id="2" class="pad yellow-pad disabled"></div>
			<div id="3" class="pad blue-pad disabled"></div>
        `)
        });
        describe('disabled pads', function() {
            it('should return green-pad as disabled', function() {
                play();
                expect('.green-pad').toHaveClass('disabled');
            });
            it('should return red-pad as disabled', function() {
                play();
                expect('.red-pad').toHaveClass('disabled');
            });
            it('should return yellow-pad as disabled', function() {
                play();
                expect('.yellow-pad').toHaveClass('disabled');
            });
            it('should return blue-pad as disabled', function() {
                play();
                expect('.blue-pad').toHaveClass('disabled');
            });
        })


    });
});
