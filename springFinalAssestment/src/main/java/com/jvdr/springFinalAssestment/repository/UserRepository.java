package com.jvdr.springFinalAssestment.repository;

import com.jvdr.springFinalAssestment.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

}
