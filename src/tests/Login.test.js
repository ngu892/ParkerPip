const UserLogin = require('../User_Login');

// We recommend installing an extension to run jest tests.

describe('UserLogin', () => {
    test('should return true for valid credentials', () => {
        const result = UserLogin('validUser', 'validPassword');
        expect(result).toBe(true);
    });

    test('should return false for invalid username', () => {
        const result = UserLogin('invalidUser', 'validPassword');
        expect(result).toBe(false);
    });

    test('should return false for invalid password', () => {
        const result = UserLogin('validUser', 'invalidPassword');
        expect(result).toBe(false);
    });

    test('should return false for empty username', () => {
        const result = UserLogin('', 'validPassword');
        expect(result).toBe(false);
    });

    test('should return false for empty password', () => {
        const result = UserLogin('validUser', '');
        expect(result).toBe(false);
    });

    test('should return false for both empty username and password', () => {
        const result = UserLogin('', '');
        expect(result).toBe(false);
    });

    test('should return false for null username', () => {
        const result = UserLogin(null, 'validPassword');
        expect(result).toBe(false);
    });

    test('should return false for null password', () => {
        const result = UserLogin('validUser', null);
        expect(result).toBe(false);
    });

    test('should return false for both null username and password', () => {
        const result = UserLogin(null, null);
        expect(result).toBe(false);
    });

    test('should return false for undefined username', () => {
        const result = UserLogin(undefined, 'validPassword');
        expect(result).toBe(false);
    });

    test('should return false for undefined password', () => {
        const result = UserLogin('validUser', undefined);
        expect(result).toBe(false);
    });

    test('should return false for both undefined username and password', () => {
        const result = UserLogin(undefined, undefined);
        expect(result).toBe(false);
    });
});
        expect(result).toBe(false);
    });
});