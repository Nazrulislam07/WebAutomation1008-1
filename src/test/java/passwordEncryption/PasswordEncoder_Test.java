package passwordEncryption;

import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder_Test {
	
	// public class PasswordHash extends TestCase{  does not require @Test annotation

	@Test
	public void testBCryptHash_Test() {
			
		String rawPassword = "Test2";
		BCryptPasswordEncoder bCryptedEncoder = new BCryptPasswordEncoder();
		
		String bCryptedPassword = bCryptedEncoder.encode(rawPassword);
		
		System.out.println("BCrypted Pasword for " + rawPassword + " is: " + bCryptedPassword);
	}
	
}
