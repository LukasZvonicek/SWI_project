package com.example.projekt.unit;

import com.example.projekt.service.GameService;
import com.example.projekt.model.entity.Game;
import com.example.projekt.model.repository.GameRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


public class GameServiceTest {

    @Mock
    private GameRepository gameRepository;

    @InjectMocks
    private GameService gameService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllGames() {
        Game game1 = new Game();
        game1.setId(1L);
        game1.setTitle("Game 1");

        Game game2 = new Game();
        game2.setId(2L);
        game2.setTitle("Game 2");

        when(gameRepository.findAll()).thenReturn(Arrays.asList(game1, game2));


        List<Game> games = gameService.getAllGames();
        assertEquals(2, games.size(), "Should be 2 games");
        assertEquals("Game 1", games.get(0).getTitle(), "First game should be 'Game 1'");
        assertEquals("Game 2", games.get(1).getTitle(),"Second game should be 'Game 2'");
    }
}
