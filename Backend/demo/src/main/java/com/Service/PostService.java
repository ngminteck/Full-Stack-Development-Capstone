package com.Service;

import com.DTO.Post;
import com.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService implements AppService<Post> {

    @Autowired
    private PostRepository postRepo;

    @Override
    public List<Post> getAll() {
        return postRepo.findAll();
    }

    public Post approvePost(Post post) {
        Post postDB = postRepo.getReferenceById(post.getPostId());
        postDB.setApproved(true);
        return postRepo.save(postDB);
    }

    @Override
    public Post create(Post post) {
        return postRepo.save(post);
    }

    @Override
    public void delete(Long id) {
        postRepo.deleteById(id);
    }
}
