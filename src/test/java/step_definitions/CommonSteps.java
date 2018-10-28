package step_definitions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import helper_classes.Hooks;

public class CommonSteps {
//	static Logger log;
	private static WebDriver driver;

	public CommonSteps() {
		driver = Hooks.webDriver;
//		new GooglePage(driver);
	}


	@Given("^I launch the Google home page$")
	public void i_launch_the_Google_home_page() throws Throwable {
		driver.get("https://www.google.com");
		
	}



	@Given("^I launch the Google home page url$")
	public void i_launch_the_Google_home_page_url() throws Throwable {
		System.out.println("Launching the Google home page . . . .  . . . ");
		//				BaseClass.launchWebApp();
		driver.get("https://www.google.com");
		Assert.assertEquals(true, driver.getPageSource().contains("Google"));
		Thread.sleep(2000);
	}


	@Given("^I scroll down to the end of the page$")
	public void i_scroll_down_to_the_end_of_the_page() throws Throwable {
		
		((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Thread.sleep(2000);   // temporary wait
	
	}

	

}
