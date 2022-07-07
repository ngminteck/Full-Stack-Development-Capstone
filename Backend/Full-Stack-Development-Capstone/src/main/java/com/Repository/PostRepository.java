package com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.DTO.Post;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post,Long>{
    List<Post> findByApproved(boolean b);
    @Query("Select * from Post p " +
            "where is_approved = true" +
            "join PostCategory pc on pc.post_id = p.post_id" +
            "join Category c on c.category_id = pc.category_id" +
            "having c.category_name like ?1")
    List<Post> findByCategory(String categoryName);
	
}
