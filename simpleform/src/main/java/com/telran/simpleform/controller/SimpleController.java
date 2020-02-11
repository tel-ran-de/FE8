package com.telran.simpleform.controller;

import com.telran.simpleform.controller.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return "OK from post";
    }

    @PostMapping("/form-with-object")
    public String simpleFormViaPost(UserDto user) {
        log.info("User={}", user);
        return "OK from post with object mapping";
    }

}
