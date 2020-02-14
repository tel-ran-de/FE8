package com.telran.simpleform.repository;

import com.telran.simpleform.controller.dto.PetDto;
import com.telran.simpleform.controller.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PetRepository {

    private final List<PetDto> pets = new ArrayList<>();

    public void save(PetDto petDto) {
        if(petDto.getId()==null)
        pets.add(petDto);
        else {pets.set(petDto.getId(),petDto);}
    }

    public List<PetDto> getPets() {
        return pets;
    }


    public PetDto getPetById(int id) {
        return pets.get(id);
    }
}

