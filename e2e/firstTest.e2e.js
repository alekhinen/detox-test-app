describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome to DetoxTestApp'))).toBeVisible();
  });

  it('should be able to handle button presses', async () => {
    await element(by.text('Press Me')).tap();
    await expect(element(by.text('Pressed times: 1'))).toBeVisible();
  });
});
