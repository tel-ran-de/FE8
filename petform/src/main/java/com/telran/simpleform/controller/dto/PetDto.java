package com.telran.simpleform.controller.dto;

import lombok.Data;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;


@Data
public class PetDto {
    private String petName;
    private String petAge;
    private LocalDate birthDay;
    private String petKind;
}

