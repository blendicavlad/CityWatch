package com.app.server.repository;

import com.app.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

	Optional<User> findByEmail(String email);

	Boolean existsByEmail(String email);
}
