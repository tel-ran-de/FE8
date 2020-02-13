package com.telran.simpleform.controller.dto;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Date;

@RestController
@RequestMapping("/api1")
@Slf4j


public class PetSimpleController {
    @GetMapping("/form")
    public String simpleFormPet(String petName, String petAge, LocalDate birthDay, String petKind) {
        log.info("petName={} petAge={} birthDay={} petKind={}" , petName, petAge, birthDay, petKind);
        return "OK";
    }


    @PostMapping("/form")
    public String simpleFormPetPost(String petName, String petAge, LocalDate birthDay, String petKind) {
        log.info("petName={} petAge={} birthDay={} petKind={}" , petName, petAge, birthDay, petKind);
        return "OK from post";
    }

    @PostMapping("/form-with-object-Pet")
    public String simpleFormViaPostPet(PetDto pet) {
        log.info("Pet={}", pet);
        return "OK from post with object mapping";
    }
}

