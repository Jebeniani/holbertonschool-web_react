import getFullYear from './utils';
import getFooterCopy from './utils';
import getLatestNotification from './utils';

describe('getFullYear', () => {
    it('returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
});

describe('getFooterCopy', () => {
    it('returns "Holberton School" when isIndex is true', () => {
        const copy = getFooterCopy(true);
        expect(copy).toBe('Holberton School');
    });

    it('returns "Holberton School main dashboard" when isIndex is false', () => {
        const copy = getFooterCopy(false);
        expect(copy).toBe('Holberton School main dashboard');
    });
});

describe('getLatestNotification', () => {
    it('returns the correct string', () => {
        const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(expectedString);
    });
});
