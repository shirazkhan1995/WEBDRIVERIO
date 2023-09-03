describe("suite", ()=>{
    it("test", async()=>{
        const contentOption = await $('~Content')
        await browser.pause(3000)
        await contentOption.click() 
        const resourcesOption = await $('~Resources')
        const text = resourcesOption.getText()
        console.log(text)
        expect(await resourcesOption.getText()).toHaveText("Resources");        


    })
})