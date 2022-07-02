package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DTO.User;
import com.Repository.CategoryRepository;
import com.Repository.ImageRepository;
import com.Repository.PostCategoryRepository;
import com.Repository.PostRepository;
import com.Repository.UserRepository;

@RestController
public class Controller 
{

	@Autowired
	private final UserRepository userRepository;
	@Autowired
	private final ImageRepository imagerRepository;
	@Autowired
	private final PostRepository postRepository;
	@Autowired
	private final CategoryRepository categoryRepository;
	@Autowired
	private final PostCategoryRepository postCategoryRepository;
	
 
	
	
	public Controller(UserRepository userRepository, ImageRepository imagerRepository, PostRepository postRepository,
			CategoryRepository categoryRepository, PostCategoryRepository postCategoryRepository) {
		super();
		this.userRepository = userRepository;
		this.imagerRepository = imagerRepository;
		this.postRepository = postRepository;
		this.categoryRepository = categoryRepository;
		this.postCategoryRepository = postCategoryRepository;
	}





	@GetMapping("/users")
	List<User> getAll(){
		return userRepository.findAll();
	}
	
}
