package com.Service;

import com.DTO.User;
import com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements AppService<User> {
    @Autowired
    private UserRepository userRepo;

    @Override
    public List<User> getAll() {
        return userRepo.findAll();
    }

    @Override
    public Optional<User> getById(Long id) {
        return userRepo.findById(id);
    }

    @Override
    public User create(User user) {
        return userRepo.save(user);
    }

    public User changePassword(User user, String newPassword) {
        User userDB = userRepo.getReferenceById(user.getUserID());
        userDB.setPassword(newPassword);
        return userRepo.save(userDB);
    }

    @Override
    public void delete(Long id) {
        userRepo.deleteById(id);
    }
}
