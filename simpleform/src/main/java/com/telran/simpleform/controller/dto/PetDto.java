package com.telran.simpleform.controller.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PetDto {
    private String petName;
    private int petAge;
    private Date birthDay;
    private String petKind;

}

