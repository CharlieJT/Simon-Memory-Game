describe('play function', function() {

    beforeEach(() => {
        correct = true;
    });

    it('should return correct = true', function() {
        let result = play();
        expect(correct).toBe(true);
    });
});