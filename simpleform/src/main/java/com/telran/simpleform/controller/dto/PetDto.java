package com.telran.simpleform.controller.dto;

import java.util.Date;
import javax.validation.constraints.NotEmpty;
import lombok.Data;

/**
 * Created for simpleform.
 * User: andron13
 * Date: 10.02.2020
 * Time: 19:17
 */
@Data
public class PetDto {

	private String petName;
	private String petAge;
	private String birthDay;
	private String petKind;
	private String limbCount;
}
