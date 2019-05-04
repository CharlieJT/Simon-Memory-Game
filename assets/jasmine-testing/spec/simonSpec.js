describe('play function', function() {

    beforeEach(() => {
        light = 0;
        turn = 1;
        correct = true;
        compTurn = true;
    });

    describe('Value of light variable', function() {
        it('should return light = 0', function() {
            play();
            expect(light).toBe(0);
        });
    });

    describe('Value of turn variable', function() {
        it('should return turn = 1', function() {
            play();
            expect(turn).toBe(1);
        });
    });

    describe('Value of correct variable', function() {
        it('should return correct = true', function() {
            play();
            expect(correct).toBe(true);
        });
    });

    describe('Value of compTurn variable', function() {
        it('should return compTurn = true', function() {
            play();
            expect(compTurn).toBe(true);
        });
    });
    
    describe('Value of number-counter', function() {
        it('should return number-display text to equal an empty string', function() {
            play();
            expect($('#number-counter').text()).toEqual('');
        });
    });
});


