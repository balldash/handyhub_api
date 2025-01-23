const { logMessage } = require('../../app/utils/logger');

describe('logMessage', () => {
    it('should log the message and return true', () => {
        const result = logMessage('Hello, HandyHub!');
        expect(result).toBe(true);
    });

    it('should throw an error if no message is not provided', () => {
        expect(() => logMessage()).toThrow('Message is required');
    });
});