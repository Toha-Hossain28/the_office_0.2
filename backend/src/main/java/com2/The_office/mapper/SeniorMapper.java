package com2.The_office.mapper;

import com2.The_office.dto.SeniorDto;
import com2.The_office.entity.Senior;

public class SeniorMapper {
    public static SeniorDto mapToSeniorDto(Senior senior) {
        return new SeniorDto(
                senior.getId(),
                senior.getFirstName(),
                senior.getLastName(),
                senior.getEmail(),
                senior.getPhone(),
                senior.getSalary(),
                senior.getEmployeeType(),
                senior.getDepartment(),
                senior.getMainSkill()
        );
    }

    public static Senior mapToSenior(SeniorDto dto) {
        return new Senior(
                dto.getId(),
                dto.getFirstName(),
                dto.getLastName(),
                dto.getEmail(),
                dto.getPhone(),
                dto.getSalary(),
                dto.getEmployeeType(),
                dto.getDepartment(),
                dto.getMainSkill()
        );
    }
}
