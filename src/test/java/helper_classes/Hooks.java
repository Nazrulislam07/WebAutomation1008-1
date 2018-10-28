package helper_classes;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static WebDriver webDriver;
	public String browser;


	/**
	 * Will create a new WebDriver for the desired browser  
	 */
	
	@Before
	public void getBrowser(Scenario scenario) throws Exception {
		System.out.println("Before test....");
		
/*		browser = GlobalSettings.getInstance().getProperty("BROWSER");
		System.out.println("Selected browser is: " + browser);
*/
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");  // For Windows
//			System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver");  // For Mac
			webDriver = new ChromeDriver();
		}
	
	@After
	public void afterTest(Scenario scenario) {
		System.out.println("After Test........");
		try {
			webDriver.quit();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}


}