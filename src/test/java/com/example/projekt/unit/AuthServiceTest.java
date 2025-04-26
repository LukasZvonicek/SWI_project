package com.example.projekt.unit;

import com.example.projekt.model.entity.AppUser;
import com.example.projekt.model.repository.UserRepository;
import com.example.projekt.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class AuthServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testRegisterUser() {
        AppUser appUser = new AppUser();
        appUser.setUsername("testuser");
        appUser.setPassword("password");

        when(userRepository.save(any(AppUser.class))).thenReturn(appUser);

        AppUser registeredUser = userService.saveUser(appUser);

        assertNotNull(registeredUser);
        assertEquals("password", registeredUser.getPassword());
        verify(userRepository,times(1)).save(any(AppUser.class));
    }

    @Test
    public void testLoginUser() {
        AppUser appUser = new AppUser();
        appUser.setUsername("testuser");
        appUser.setPassword("password");

        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(appUser));

        boolean loginSuccessful = userService.loginUser("testuser", "password");

        assertTrue(loginSuccessful);
        verify(userRepository, times(1)).findByUsername("testuser");
    }

}
