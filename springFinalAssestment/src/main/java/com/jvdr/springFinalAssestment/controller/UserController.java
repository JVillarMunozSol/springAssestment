package com.jvdr.springFinalAssestment.controller;

import com.jvdr.springFinalAssestment.entity.User;
import com.jvdr.springFinalAssestment.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService service;
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        return service.saveUser(user);
    }
    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return service.getAllUsers();
    }
    @GetMapping("/User/{id}")
    public User getUserById(@PathVariable int id){
        return service.getUserById(id);
    }

}
