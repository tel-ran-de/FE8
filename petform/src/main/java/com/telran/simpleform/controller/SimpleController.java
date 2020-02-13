package com.telran.simpleform.controller;

import com.telran.simpleform.controller.dto.UserDto;
import com.telran.simpleform.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@Slf4j
public class SimpleController {

    private final UserRepository userRepository;

    public SimpleController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/user")
    public List<UserDto> getUsers() {
        log.info("get all users request received");
        return userRepository.getUsers();
    }

    @PostMapping("/user")
    public String simpleFormViaPost(UserDto user) {
        log.info("User={}", user);
        userRepository.save(user);
        return "User " + user.toString() + " created";
    }
}
