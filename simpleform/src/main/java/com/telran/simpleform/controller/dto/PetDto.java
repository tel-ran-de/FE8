package com.telran.simpleform.controller.dto;

import lombok.Data;

@Data
public class PetDto {
    private String name;
    private int age;
    private String dateOfBirth;
    private String kind;
    private int numberOfLegs;
}
