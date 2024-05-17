package com2.The_office.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SeniorDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Double salary;
    private String employeeType;
    private String department;
    private String mainSkill;
}
