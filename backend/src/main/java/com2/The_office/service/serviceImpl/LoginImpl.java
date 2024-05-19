package com2.The_office.service.serviceImpl;

import com2.The_office.dto.LoginDto;
import com2.The_office.entity.LoginEntity;
import com2.The_office.exception.ResourceNotFoundException;
import com2.The_office.mapper.LoginMapper;
import com2.The_office.repository.LoginRepository;
import com2.The_office.service.LoginService;

import java.util.List;
import java.util.stream.Collectors;

public class LoginImpl implements LoginService {

    private LoginRepository loginRepository;
    @Override
    public LoginDto createLogin(LoginDto loginDto) {
        LoginEntity loginEntity = LoginMapper.mapToLoginEntity(loginDto);
        LoginEntity savedLogin = loginRepository.save(loginEntity);
        return LoginMapper.mapToLoginDto(savedLogin);
    }

    @Override
    public LoginDto getLoginById(Long id) {
        LoginEntity loginEntity = loginRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Login Not Found with give id: "+id));
        return LoginMapper.mapToLoginDto(loginEntity);
    }

    @Override
    public List<LoginDto> getAllLogins() {
        List<LoginEntity> logins = loginRepository.findAll();
        return logins.stream().map((login -> LoginMapper.mapToLoginDto(login)))
                .collect(Collectors.toList());
    }

    @Override
    public LoginDto updateLogin(Long id, LoginDto loginDto) {
        LoginEntity loginEntity = loginRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Login Not Found with give id: "+id)
        );
        loginEntity.setUsername(loginDto.getUsername());
        loginEntity.setPassword(loginDto.getPassword());
        LoginEntity savedLogin = loginRepository.save(loginEntity);
        return LoginMapper.mapToLoginDto(savedLogin);
    }

    @Override
    public void deleteLogin(Long loginId) {
        loginRepository.deleteById(loginId);
    }
}
