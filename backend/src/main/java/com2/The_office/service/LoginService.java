package com2.The_office.service;

import com2.The_office.dto.LoginDto;

import java.util.List;

public interface LoginService {
    LoginDto createLogin(LoginDto loginDto);

    LoginDto getLoginById(Long id);

    List<LoginDto> getAllLogins();
    LoginDto updateLogin(Long id,LoginDto loginDto);
    void deleteLogin(Long loginId);
}
