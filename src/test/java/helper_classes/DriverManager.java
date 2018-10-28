package helper_classes;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.InetAddress;
import java.util.Properties;

public final class DriverManager {

	private static InputStream propertyFileStream;
	private static Properties property;
	private static DriverManager setting;
	
	private String currentDirectory; 

	private DriverManager() {
		InetAddress localHost;
		String hostIPAddress;	
		property = new Properties();
		try {
			/*
			localHost = InetAddress.getLocalHost();			 
			hostIPAddress = localHost.getHostAddress();
			System.out.println("Host IP Address: " + hostIPAddress);
			
		 */			
			currentDirectory = System.getProperty("user.dir");
			System.out.println("Project location: " + currentDirectory);
			
			property.load(new FileInputStream(new File("./properties/EnvSettings.properties")));
			// ./properties/EnvSettings.properties

			if (propertyFileStream != null) {
				property.load(propertyFileStream);
			}
						
		} catch(IOException io) {
			System.err.println(io.getMessage());
		}
	}

	public static DriverManager getInstance() {
		if (setting != null)
		{
			return setting;
		}
		else
		{
			return new DriverManager();
		}
	}


	public String getProperty(String name) throws Exception {
		return property.getProperty(name).toString();
	}
}
