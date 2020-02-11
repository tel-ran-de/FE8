package com.telran.simpleform.controller;

import com.telran.simpleform.controller.dto.YourPetDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/apiYourPet")
@Slf4j

public class YourPetController {
    @PostMapping ("/form-with-object")
    public String yourPetFormViaPost(YourPetDto yourPet) {
        log.info("YourPet={}",yourPet);
        return "OK from post with your pet object mapping";
    }
}

