package com2.The_office.service.serviceImpl;

import com2.The_office.dto.SeniorDto;
import com2.The_office.entity.Senior;
import com2.The_office.exception.ResourceNotFoundException;
import com2.The_office.mapper.SeniorMapper;
import com2.The_office.repository.SeniorRepository;
import com2.The_office.service.SeniorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SeniorServiceImpl implements SeniorService {
    private SeniorRepository seniorRepository;

    @Override
    public SeniorDto createSenior(SeniorDto seniorDto) {
        Senior senior = SeniorMapper.mapToSenior(seniorDto);
        Senior savedSenior = seniorRepository.save(senior);
        return SeniorMapper.mapToSeniorDto(savedSenior);
    }

    @Override
    public SeniorDto getSeniorById(Long id) {
        Senior senior = seniorRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Senior Not Found with give id: "+id));
        return SeniorMapper.mapToSeniorDto(senior);
    }

    @Override
    public List<SeniorDto> getAllSeniors() {
        List<Senior> seniors = seniorRepository.findAll();
        return seniors.stream().map((senior -> SeniorMapper.mapToSeniorDto(senior)))
                .collect(Collectors.toList());
    }

    @Override
    public SeniorDto updateSenior(Long id, SeniorDto updatedSenior) {
        Senior senior = seniorRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Senior Not Found with give id: "+id)
        );
        senior.setFirstName(updatedSenior.getFirstName());
        senior.setLastName(updatedSenior.getLastName());
        senior.setEmail(updatedSenior.getEmail());
        senior.setPhone(updatedSenior.getPhone());
        senior.setSalary(updatedSenior.getSalary());
        senior.setEmployeeType(updatedSenior.getEmployeeType());
        senior.setDepartment(updatedSenior.getDepartment());
        senior.setMainSkill(updatedSenior.getMainSkill());

        Senior savedSenior = seniorRepository.save(senior);
        return SeniorMapper.mapToSeniorDto(savedSenior);
    }

    @Override
    public void deleteSenior(Long seniorId) {
        Senior senior = seniorRepository.findById(seniorId).orElseThrow(
                () -> new ResourceNotFoundException("Senior Not Found with give id: "+seniorId)
        );
        seniorRepository.delete(senior);
    }

}
