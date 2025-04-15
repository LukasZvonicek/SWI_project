package com.example.projekt.model.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Game {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private String title;

    @Enumerated(EnumType.STRING)
    private Genre genre;

    private String platform;
    private int releaseYear;
}
