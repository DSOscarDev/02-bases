


describe('Test in the App File', () => {
    test('should be 30', () => {
        
        // 1. Arrange
        const num1 = 10;
        const num2 = 20;

        // 2. Act
        const resut = num1 + num2+5;

        // 3. Assert
        expect(resut).toBe(35);
                
    })
});