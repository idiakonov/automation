import { navigateTo } from "../../PageObjects/SearchLocators";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('the user has navigated to the URL https://mobilityrxiv.sae.org/', () => {
    navigateTo.NavigateToWeb('https://mobilityrxiv.sae.org/')
});
const productCode = 'SAE-PP-00223'
When('the user searches for SAE-PP-00223', () => {
    navigateTo.SearchField(`${productCode}`)
});

And('the user clicks on the first result', () => {
    navigateTo.SelectClick()
});

Then('the id "SAE-PP-00223" is present under the title', () => {
    navigateTo.VerifyTitleById(`${productCode}`);
});

