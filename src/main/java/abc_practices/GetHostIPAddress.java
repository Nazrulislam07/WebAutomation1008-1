package abc_practices;

import java.net.InetAddress;
import java.net.UnknownHostException;

// https://www.mkyong.com/java/how-to-get-ip-address-in-java/?utm_source=mkyong&utm_medium=author&utm_campaign=related-post&utm_content=4

public class GetHostIPAddress {
	
	public static void main(String[] args) {
		InetAddress localHost;
		String hostIPAddress;
		try {
			localHost = InetAddress.getLocalHost();
			 
			hostIPAddress = localHost.getHostAddress();
					
			System.out.println("Host IP Address: " + hostIPAddress);

		} catch (UnknownHostException e) {

			e.printStackTrace();

		}
	}
	}
