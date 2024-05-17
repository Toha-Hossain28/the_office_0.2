package com2.The_office.controller;

import com2.The_office.dto.SeniorDto;
import com2.The_office.service.SeniorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/seniors")
public class SeniorController {
    private SeniorService seniorService;

    @PostMapping
    public ResponseEntity<SeniorDto> createSenior(@RequestBody SeniorDto seniorDto) {
        SeniorDto savedSenior = seniorService.createSenior(seniorDto);
        return new ResponseEntity<>(savedSenior, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<SeniorDto>> getAllSeniors() {
        List<SeniorDto> seniors= seniorService.getAllSeniors();
        return ResponseEntity.ok(seniors);
    }

    @GetMapping("{id}")
    public ResponseEntity<SeniorDto> getSeniorById(@PathVariable("id") Long seniorId) {
        SeniorDto seniorDto= seniorService.getSeniorById(seniorId);
        return ResponseEntity.ok(seniorDto);
    }

    @PutMapping("{id}")
    public ResponseEntity<SeniorDto> updateSenior(@PathVariable("id") Long seniorId,
                                                  @RequestBody SeniorDto updatedSenior) {
        SeniorDto seniorDto= seniorService.updateSenior(seniorId, updatedSenior);
        return  ResponseEntity.ok(seniorDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSenior(@PathVariable("id") Long seniorId) {
        seniorService.deleteSenior(seniorId);
        return ResponseEntity.ok("Senior deleted successfully!/");
    }

}
