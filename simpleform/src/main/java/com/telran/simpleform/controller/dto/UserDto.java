package com.telran.simpleform.controller.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class UserDto {
    private Integer id;
    @NotEmpty
    private String firstName;
    private String lastName;
    private String email;
}
