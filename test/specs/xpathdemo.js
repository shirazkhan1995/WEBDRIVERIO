describe("suite", ()=>{
    it("test", async()=>{
        const chromeApp = await $('~Chrome')
        await chromeApp.click()
        await browser.pause(3000);
        const xpath = await $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]')
        const text = await xpath.getText();
        console.log(text);
        expect(await xpath.getText()).toHaveText("Search or type web address");     
    })
})