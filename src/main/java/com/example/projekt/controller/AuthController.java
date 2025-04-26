package com.example.projekt.controller;

import com.example.projekt.model.entity.AppUser;
import com.example.projekt.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000") // povolit volání z Reactu
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> userData) {
        String username = userData.get("username");
        String password = userData.get("password");

        Optional<AppUser> optionalUser = userRepository.findByUsername(username);

        Map<String, String> response = new HashMap<>();

        if (optionalUser.isPresent()) {
            AppUser appUser = optionalUser.get();
            if (appUser.getPassword().equals(password)) {
                response.put("username", appUser.getUsername());
                response.put("role", appUser.getRole().toString());
                return response;
            }
        }

        response.put("error", "Invalid credentials");
        return response;
    }

    @PostMapping("/register")
    public String register(@RequestBody AppUser appUser) {
        if (userRepository.findByUsername(appUser.getUsername()).isPresent()) {
            return "User already exists";
        }
        userRepository.save(appUser);
        return "Registration successful";
    }
}
