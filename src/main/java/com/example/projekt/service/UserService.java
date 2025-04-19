package com.example.projekt.service;

import com.example.projekt.model.entity.AppUser;
import com.example.projekt.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public AppUser saveUser (AppUser appUser) {
        return userRepository.save(appUser);
    }

    public AppUser findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean loginUser (String username, String password) {
        AppUser appUser = userRepository.findByUsername(username);
        if (appUser != null && appUser.getPassword().equals(password)) {
            return true;
        }
        return false;
    }
}
