package com.telran.simpleform.controller;


import com.telran.simpleform.controller.dto.YourPetDto;
import com.telran.simpleform.repository.PetRepository;
import com.telran.simpleform.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/apiPet")
@Slf4j
public class YourPetController {

    private final PetRepository petRepository;

    public YourPetController(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @GetMapping("/pet")
    public List<YourPetDto> getPets() {
        log.info("get all pets request received");
        return petRepository.getPets();
    }

    @PostMapping("/pet")
    public String postPet(YourPetDto pet) {
        log.info("Pet={}", pet);
        petRepository.save(pet);
        return "Data about pet saved";
    }

}
