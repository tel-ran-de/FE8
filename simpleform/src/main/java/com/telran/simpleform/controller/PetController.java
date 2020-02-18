package com.telran.simpleform.controller;

import com.telran.simpleform.controller.dto.PetDto;
import com.telran.simpleform.repository.PetRepository;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created for simpleform.
 * User: andron13
 * Date: 10.02.2020
 * Time: 19:23
 */


@RestController
@RequestMapping("/apiPet")
@Slf4j
public class PetController {
	private final PetRepository petRepository;

	public PetController(PetRepository petRepository) {
		this.petRepository = petRepository;
	}

	@GetMapping("/pet")
	public List<PetDto> getPets() {
		log.info("get all users request received");
		return petRepository.getPets();
	}

	@PostMapping("/pet")
	public String simpleFormViaPost(PetDto petDto) {
		log.info("User={}", petDto);
		petRepository.save(petDto);
		return "User " + petDto.toString() + " created";
	}
}