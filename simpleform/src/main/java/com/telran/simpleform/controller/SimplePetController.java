package com.telran.simpleform.controller;

import com.telran.simpleform.controller.dto.PetDto;
import com.telran.simpleform.repository.PetRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api1")
@Slf4j
public class SimplePetController {

    private final PetRepository petRepository;

    public SimplePetController(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @GetMapping("/pet")
    public List<PetDto> getPets() {
        log.info("get all pets request received");
        return petRepository.getPets();
    }

    @PostMapping("/pet")
    public String simpleFormViaPost(PetDto pet) {
        log.info("Pet={}", pet);
        petRepository.save(pet);
        return "Pet " + pet.toString() + " created";
    }
}

