package com.telran.simpleform.repository;

import com.telran.simpleform.controller.dto.YourPetDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PetRepository {

    private final List<YourPetDto> pets = new ArrayList<>();

    public void save(YourPetDto yourPetDto) {
        pets.add(yourPetDto);
    }

    public List<YourPetDto> getPets() {
        return pets;
    }
}