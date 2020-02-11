package com.telran.simpleform.controller;
import com.telran.simpleform.controller.dto.PetDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api1")
@Slf4j
public class SimplePetController {

    @PostMapping("/form-with-object-pet")
    public String simpleFormViaPost(PetDto pet) {
        log.info("Pet={}", pet);
        return "OK from post with pet object mapping";
    }


}

