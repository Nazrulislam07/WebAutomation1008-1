package abc_practices;

//import org.junit.Assert;
import org.testng.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class GoogleFooterTermsMain {

	public static void main(String[] args) throws InterruptedException {

		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.google.com");
		Thread.sleep(2000);
		
		driver.findElement(By.linkText("Terms")).click();
		Thread.sleep(2000);
		
		Assert.assertEquals(true, driver.getPageSource().contains("Privacy"));
		
		Thread.sleep(12000);
		driver.close();
		
	}

	
}