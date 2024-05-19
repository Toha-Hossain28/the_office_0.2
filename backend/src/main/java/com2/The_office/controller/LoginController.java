//package com2.The_office.controller;
//
//import com2.The_office.dto.LoginDto;
//import lombok.AllArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import com2.The_office.service.LoginService;
//
//import java.util.List;
//
//@CrossOrigin("*")
//@AllArgsConstructor
//@RestController
//@RequestMapping("/api/login")
//public class LoginController {
//    private LoginService loginService;
//
//    @PostMapping
//    public ResponseEntity<LoginDto> login(@RequestBody LoginDto loginDto) {
//        LoginDto savedLogin = loginService.createLogin(loginDto);
//        return new ResponseEntity<>(savedLogin, HttpStatus.CREATED);
//    }
//
//    @GetMapping
//    public ResponseEntity<List<LoginDto>> getAllLogins() {
//        List<LoginDto> logins = loginService.getAllLogins();
//        return ResponseEntity.ok(logins);
//    }
//
//    @GetMapping("{id}")
//    public ResponseEntity<LoginDto> getLoginById(@PathVariable("id") Long loginId) {
//        LoginDto loginDto = loginService.getLoginById(loginId);
//        return ResponseEntity.ok(loginDto);
//    }
//
//    @PutMapping("{id}")
//    public ResponseEntity<LoginDto> updateLogin(@PathVariable("id") Long loginId,
//                                                @RequestBody LoginDto updatedLogin) {
//        LoginDto loginDto = loginService.updateLogin(loginId, updatedLogin);
//        return  ResponseEntity.ok(loginDto);
//    }
//
//    @DeleteMapping("{id}")
//    public ResponseEntity<String> deleteLogin(@PathVariable("id") Long loginId) {
//        loginService.deleteLogin(loginId);
//        return ResponseEntity.ok("Login deleted successfully!/");
//    }
//
//}
