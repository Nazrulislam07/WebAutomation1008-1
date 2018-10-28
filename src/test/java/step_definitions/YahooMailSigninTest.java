package step_definitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.Hooks;
import page_objects.YahooPage;

public class YahooMailSigninTest extends YahooPage{ // Needed for Page Object Model
	private static WebDriver driver;
	//	private WebDriverWait wait;
	//	private static Logger log = Logger.getLogger(GmailAccountLoginTest.class);

	public YahooMailSigninTest() {
		super(driver);   // Needed for Page Object Model
		driver = Hooks.webDriver;
		//		new GooglePage(driver);
		//		wait = new WebDriverWait(driver, 20);
	}



	@Given("^I launch the Yahoo home page$")
	public void i_launch_the_Yahoo_home_page() throws Throwable {

		
	}

	@When("^I provided my yahoo username and password$")
	public void i_provided_my_yahoo_username_and_password() throws Throwable {

		

	}

	@Then("^I signed into my yahoo account successfully$")
	public void i_signed_into_my_yahoo_account_successfully() throws Throwable {

		

	}


}

