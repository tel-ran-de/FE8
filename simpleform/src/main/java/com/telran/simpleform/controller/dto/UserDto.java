package com.telran.simpleform.controller.dto;

import javax.validation.constraints.NotEmpty;
import lombok.Data;

/**
 * Created for simpleform.
 * UserDto: andron13
 * Date: 08.02.2020
 * Time: 11:34
 */

@Data
public class UserDto {
    private Integer id;
    @NotEmpty
    private String firstName;
    private String lastName;
    private String email;
}
