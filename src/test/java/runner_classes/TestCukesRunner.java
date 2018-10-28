package runner_classes;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.junit.runner.RunWith;
import org.testng.ITestContext;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

//import builder_classes.ExtentReporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features/",
		glue={"helper_classes", "runner_classes", "step_definitions"},  // These must be glued
		tags = {"~@wip", "@regression"},
		monochrome = true,

		plugin ={"pretty","json:reports/cucumber-reports/json-report.json", 
        "html:reports/cucumber-reports/html-report.html" }
		

		)


public class TestCukesRunner extends AbstractTestNGCucumberTests {
	/*
	 *  Wired name?? Don't know. For more information please visit: https://cucumber.io/docs/reference/jvm#java
	 *   
	 * 
	 */

	@BeforeSuite
	public static void initializeSuite(ITestContext xmlSuite) throws FileNotFoundException, IOException {	
		System.out.println("Before Suite....");

		String suiteName = xmlSuite.getSuite().getName();
//		ExtentReporter.startExtentReport(suiteName);

	}


	@AfterSuite
	public static void afterSuite() {
		System.out.println("After Suite....");

	}
}