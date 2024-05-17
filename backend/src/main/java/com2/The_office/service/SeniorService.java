package com2.The_office.service;

import com2.The_office.dto.SeniorDto;

import java.util.List;

public interface SeniorService {
    SeniorDto createSenior(SeniorDto seniorDto);

    SeniorDto getSeniorById(Long id);

    List<SeniorDto> getAllSeniors();
    SeniorDto updateSenior(Long id, SeniorDto seniorDto);
    void deleteSenior(Long seniorId);
}
