package com.telran.simpleform.controller;

import com.telran.simpleform.controller.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created for simpleform.
 * UserDto: andron13
 * Date: 08.02.2020
 * Time: 10:35
 */

@RestController
@RequestMapping("/api")
@Slf4j
public class SimpleController {

	@GetMapping("/form")
	public String simpleForm(String firstName, String lastName, String email) {
		log.info("firstName={} lastName={} email={}", firstName, lastName, email);
		return "OK";
	}

	@PostMapping("/form")
	public String simpleFormViaPost(String firstName, String lastName, String email) {
		log.info("firstName={} lastName={} email={}", firstName, lastName, email);
		return "OK from POST";
	}

	@PostMapping("/form-with-object")
	public String simpleFormViaPost(UserDto user) {
		log.info("user={}", user);
		return "OK from POST-Object";
	}

}