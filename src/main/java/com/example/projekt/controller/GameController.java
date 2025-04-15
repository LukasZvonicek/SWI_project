package com.example.projekt.controller;


import com.example.projekt.model.entity.Game;
import com.example.projekt.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping ("/games")
public class GameController {
    @Autowired
    private GameService gameService;

    @GetMapping
    public List<Game> getAllgames(){
        return gameService.getAllGames();
    }

    @GetMapping("/{id}")
    public Game getGameById(@PathVariable Long id) {
        return gameService.getGameById(id);
    }

    @PostMapping
    public Game createGame(@RequestBody Game game) {
        return gameService.saveGame(game);
    }

    @PutMapping("{id}")
    public Game updateGame(@PathVariable Long id, @RequestBody Game game) {
        game.setId(id);
        return gameService.saveGame(game);
    }

    @DeleteMapping
    public void deleteGame(@PathVariable Long id) {
        gameService.deleteGame(id);
    }
}
