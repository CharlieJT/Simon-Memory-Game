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
});


