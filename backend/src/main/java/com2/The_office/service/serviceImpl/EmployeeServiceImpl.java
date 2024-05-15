package com2.The_office.service.serviceImpl;

import com2.The_office.dto.EmployeeDto;
import com2.The_office.entity.Employee;
import com2.The_office.exception.ResourceNotFoundException;
import com2.The_office.mapper.EmployeeMapper;
import com2.The_office.repository.EmployeeRepository;
import com2.The_office.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee= employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Employee Not Found with give id: "+id));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee>  employees= employeeRepository.findAll();
        return employees.stream().map((employee -> EmployeeMapper.mapToEmployeeDto(employee)))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto updatedEmployee) {
        Employee employee=  employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee Not Found with give id: "+id)
        );
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        employee.setPhone(updatedEmployee.getPhone());
        employee.setSalary(updatedEmployee.getSalary());
        employee.setEmployeeType(updatedEmployee.getEmployeeType());
        employee.setDepartment(updatedEmployee.getDepartment());
        employee.setMainSkill(updatedEmployee.getMainSkill());

        Employee savedEmployee = employeeRepository.save(employee);
        return  EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee=  employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee Not Found with give id: "+employeeId)
        );
        employeeRepository.deleteById(employeeId);
    }


}
