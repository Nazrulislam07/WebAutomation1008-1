package abc_practices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoderMain {
	
	// public class PasswordHash_Admin extends TestCase{  does not require @Test annotation

	public static void main(String[]args){
			
		String rawPassword = "Arcedia1";
		BCryptPasswordEncoder bCryptedEncoder = new BCryptPasswordEncoder();
		String bCryptedPassword = bCryptedEncoder.encode(rawPassword);
		
		System.out.println("BCrypted Pasword for " + rawPassword + " is: " + bCryptedPassword);
	
	}
	
		
}
