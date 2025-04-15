package com.example.projekt.controller;

import com.example.projekt.model.entity.AppUser;
import com.example.projekt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public String loginUser(@RequestBody AppUser appUser) {
            AppUser foundUser = userService.findUserByUsername(appUser.getUsername());
            if (foundUser != null && foundUser.getPassword().equals(appUser.getPassword())) {
                return "Login Successful";
            } else {
                return "Invalid username or password";
            }
    }
}
