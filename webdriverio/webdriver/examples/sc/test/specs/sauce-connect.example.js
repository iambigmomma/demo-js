describe('FORK-JF-LOCALHOST', () => {
    it('should open', async () => {
        await browser.navigateTo('http://localhost:8000');
        //await expect(await $('#login-button').isDisplayed()).toBeTrue();
    });
});


