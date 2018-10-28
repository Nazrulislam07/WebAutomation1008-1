package step_definitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import helper_classes.Hooks;
import page_objects.GooglePage;


public class GitHubRepoTest {
	
/*	For no main()
 * 
 * private static WebDriver driver;
	public GitHubRepoTest() {
		driver = SetDriver.driver;
//		new GooglePage(driver);
	}
*/	
	public static void main(String[] args) throws Exception {
		
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.github.com");
		
		Assert.assertEquals(driver.getPageSource().contains("GitHub"), true);
		
		driver.findElement(By.linkText("Sign in")).click();
				
		driver.findElement(By.id("login_field")).sendKeys("ictergurutest@gmail.com");
		
		Thread.sleep(2000);
		
		driver.findElement(By.id("password")).                                                                 sendKeys("Dh@k@1000");
		
		Thread.sleep(2000);
		
		driver.findElement(By.cssSelector(".btn.btn-primary.btn-block")).click();
		
		Thread.sleep(2000);
		
		driver.findElement(By.cssSelector(".avatar.float-left.mr-1")).click();
		Thread.sleep(2000);
				
		Assert.assertEquals(driver.getPageSource().contains("WebProjectTestAutomation"), true);
		
				
		Thread.sleep(16000);
		
		
		
		
		driver.close();
		
	
	}

}
