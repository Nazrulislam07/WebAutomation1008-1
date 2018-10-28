package passwordEncryption;

import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder_Admin {
	
	// public class PasswordHash_Admin extends TestCase{  does not require @Test annotation

	
		@Test
		public void testPasswordEncoder() {
			
			String rawPassword = "Admin";
			BCryptPasswordEncoder bCryptedEncoder = new BCryptPasswordEncoder();
			String bCryptedPassword = bCryptedEncoder.encode(rawPassword);
			
			System.out.println("BCrypted Pasword for " + rawPassword + " is: " + bCryptedPassword);
			
		}

		
}
