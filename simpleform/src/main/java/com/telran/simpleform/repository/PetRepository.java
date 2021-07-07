package com.telran.simpleform.repository;

import com.telran.simpleform.controller.dto.PetDto;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 * Created for simpleform.
 * User: andron13
 * Date: 13.02.2020
 * Time: 15:51
 */

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

