package com.telran.simpleform.repository;

import com.telran.simpleform.controller.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserRepository {

    private final List<UserDto> users = new ArrayList<>();

    public void save(UserDto userDto) {
        if (userDto.getId() == null) {
            users.add(userDto);
        } else {
            users.set(userDto.getId(), userDto);
        }
    }

    public List<UserDto> getUsers() {
        return users;
    }

    public UserDto getUserById(int id) {
        return users.get(id);
    }
}
