package com.jvdr.springFinalAssestment.service;

import com.jvdr.springFinalAssestment.entity.User;
import com.jvdr.springFinalAssestment.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User saveUser(User user){
      return  repository.save(user);
    }
    public List<User> getAllUsers(){
        return repository.findAll();
    }

    public User getUserById(int id){
        return repository.findById(id).orElse(null);
    }


}
