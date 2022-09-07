package com.spring.bearbom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BearBomApplication {

	public static void main(String[] args) {
		SpringApplication.run(BearBomApplication.class, args);
	}

}
