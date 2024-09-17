package com.telran.simpleform.repository;

import com.telran.simpleform.controller.dto.PetDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PetRepository {
    private final List<PetDto> pets = new ArrayList<>();

    public void save(PetDto petDto) {
        pets.add(petDto);
    }

    public List<PetDto> getPets() {
        return pets;
    }
}
