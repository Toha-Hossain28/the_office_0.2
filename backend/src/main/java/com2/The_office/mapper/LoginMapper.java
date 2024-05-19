package com2.The_office.mapper;

import com2.The_office.dto.LoginDto;
import com2.The_office.entity.LoginEntity;

public class LoginMapper {
    public static LoginDto mapToLoginDto(LoginEntity login) {
        return new LoginDto(
                login.getId(),
                login.getUsername(),
                login.getPassword()
        );
    }

    public static LoginEntity mapToLoginEntity(LoginDto dto) {
        return new LoginEntity(
                dto.getId(),
                dto.getUsername(),
                dto.getPassword()
        );
    }
}
