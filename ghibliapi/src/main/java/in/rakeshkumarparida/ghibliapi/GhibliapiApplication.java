package in.rakeshkumarparida.ghibliapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class GhibliapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(GhibliapiApplication.class, args);
	}

}
