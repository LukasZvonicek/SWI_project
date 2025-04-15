package com.example.projekt.model.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String username;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;
}
