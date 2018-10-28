package step_definitions;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.Hooks;
import page_objects.GooglePage;

public class GoogleFooterLinkTests extends GooglePage{

	private static WebDriver driver;

	public GoogleFooterLinkTests() {
		super(driver);
		driver = Hooks.webDriver;
		System.out.println("This is the GoogleFooterLinkTests constructor....");
	}


	@When("^I click on the Privacy link$")
	public void i_click_on_the_Privacy_link() throws Throwable {
		driver.findElement(GooglePage.Privacy_Link).click();
		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I see the Privacy page$")
	public void i_see_the_Privacy_page() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Welcome to the Google Privacy Policy"));
		Thread.sleep(2000);   // temporary wait
	}

	@When("^I click on the Terms link$")
	public void i_click_on_the_Terms_link() throws Throwable {
		driver.findElement(GooglePage.Terms_Link).click();

		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I see the Terms page$")
	public void i_see_the_Terms_page() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Google Terms of Service"));
		Thread.sleep(2000);   // temporary wait
	}

	@When("^I select \"(.*?)\" link in the Google footer$")
	public void i_select_link_in_the_Google_footer(String footerLink_text) throws Throwable {

		driver.findElement(By.linkText(footerLink_text)).click();

		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I verify the selected Google page by the existence of the \"(.*?)\" text$")
	public void i_verify_the_selected_Google_page_by_the_existence_of_the_text(String linkedPage_text) throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains(linkedPage_text));
		Thread.sleep(2000);   // temporary wait
	}



	@Given("^I select the Privacy link in the Google footer$")
	public void i_select_the_Privacy_link_in_the_Google_footer() throws Throwable {
		driver.findElement(GooglePage.Privacy_Link).click();
		Thread.sleep(2000);   // temporary wait
	}

	@When("^I click on the Privacy Policy tab$")
	public void i_click_on_the_Privacy_and_Policy_tab() throws Throwable {
		driver.findElement(By.linkText("Privacy Policy")).click();
		Thread.sleep(2000);   // temporary wait

	}
	
	@When("^I click on a specific Privacy Policy \"(.*?)\"$")
	public void i_click_on_a_specific_Privacy_Policy(String privacyPolicy_Link) throws Throwable {
		driver.findElement(By.linkText(privacyPolicy_Link)).click();
		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I verify the selected \"(.*?)\" Privacy Policy detail$")
	public void i_verify_the_selected_Privacy_Policy_detail(String privacyPolicy_Text) throws Throwable {

		Assert.assertEquals(true, driver.getPageSource().contains(privacyPolicy_Text));
		Thread.sleep(2000);   // temporary wait
	}

	@Given("^I select the Terms link in the Google footer$")
	public void i_select_the_Terms_link_in_the_Google_footer() throws Throwable {
		driver.findElement(GooglePage.Terms_Link).click();
		Thread.sleep(2000);   // temporary wait

	}

	@When("^I click on the Technologies and Principles tab$")
	public void i_click_on_the_Technologies_and_Principles_tab() throws Throwable {

		driver.findElement(By.linkText("Technologies and Principles")).click();
		Thread.sleep(2000);   // temporary wait

	}
	

	@When("^I click on a specific Technology \"(.*?)\"$")
	public void i_click_on_a_specific_Technology(String technology_Link) throws Throwable {

		driver.findElement(By.linkText(technology_Link)).click();
		Thread.sleep(2000);   // temporary wait

	}

	@Then("^I verify the selected \"(.*?)\" Technology detail$")
	public void i_verify_the_selected_Technology_detail(String technologyDetail_Text) throws Throwable {

		Assert.assertEquals(true, driver.getPageSource().contains(technologyDetail_Text));
		Thread.sleep(2000);   // temporary wait

	}


}
