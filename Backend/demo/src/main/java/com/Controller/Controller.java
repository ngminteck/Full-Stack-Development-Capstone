package com.Controller;

import java.util.List;
import java.util.Optional;

import com.DTO.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.DTO.User;
import com.Repository.CategoryRepository;
import com.Repository.ImageRepository;
import com.Repository.PostCategoryRepository;
import com.Repository.PostRepository;
import com.Repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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


	@GetMapping("/posts")
	public ResponseEntity<List<Post>> getApprovedPosts() {
		try {
			List<Post> posts = postRepository.findByApproved(true);
			if (posts.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/posts/all")
	public ResponseEntity<List<Post>> getAllPosts() {
		try {
			List<Post> posts = postRepository.findAll();
			if (posts.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/posts/{id}")
	public ResponseEntity<Post> getPostById(@PathVariable("id") Long id) {
		Optional<Post> postData = postRepository.findById(id);
		return postData.map(post -> new ResponseEntity<>(post,
				HttpStatus.OK)).orElseGet(() ->
				new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@PostMapping("/posts")
	public ResponseEntity<Post> createPost(@RequestBody Post post) {
		try {
			// check if user is admin
			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			User currUser = (User) auth.getPrincipal();

			Post newPost = postRepository.save(new Post(post.getTitle(),
					post.getHeader(), post.getBody(), post.getPostDate(),
					post.getExpireDate(), currUser.isAdmin(), post.getUserID()));
			return new ResponseEntity<>(newPost, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/posts/{id}")
	public ResponseEntity<Post> updatePost(@PathVariable("id") Long id, @RequestBody Post post) {
		Optional<Post> postData = postRepository.findById(id);

		if(postData.isPresent()) {
			Post postDB = postData.get();
			postDB.setTitle(post.getTitle());
			postDB.setHeader(post.getHeader());
			postDB.setBody(post.getBody());
			postDB.setPostDate(post.getPostDate());
			postDB.setExpireDate(post.getExpireDate());
			postDB.setApproved(post.isApproved());
			return new ResponseEntity<>(postRepository.save(postDB), HttpStatus.OK);
		} else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/posts/{id}")
	public ResponseEntity<HttpStatus> deletePost(@PathVariable("id") Long id) {
		try {
			postRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}



	@GetMapping("/users")
	List<User> getAll(){
		return userRepository.findAll();
	}
	
}
