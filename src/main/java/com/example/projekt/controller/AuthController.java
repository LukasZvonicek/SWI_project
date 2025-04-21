package com.example.projekt.controller;

import com.example.projekt.model.entity.AppUser;
import com.example.projekt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public AppUser registerUser(@RequestBody AppUser appUser) {
        try{
            System.out.println("Registering user " + appUser);
            return userService.saveUser(appUser);
        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException("Error registering user", e);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody AppUser appUser) {
            boolean loginSuccessful = userService.loginUser(appUser.getUsername(), appUser.getPassword());

            if (loginSuccessful) {
                return ResponseEntity.ok("Login successful");
            }else {
                return ResponseEntity.status(401).body("Invalid username or password");
            }
    }
}
