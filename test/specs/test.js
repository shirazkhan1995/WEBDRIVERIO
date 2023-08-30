describe("suite", ()=>{
    it("test", async()=>{
        const chromeApp = await $('~Chrome')
        await chromeApp.click()
        await browser.pause(3000);
        const className = await $('android.widget.EditText')
        const text = await className.getText();
        console.log(text);
        expect(await className.getText()).toHaveText("Search or type web address");        
    })
})