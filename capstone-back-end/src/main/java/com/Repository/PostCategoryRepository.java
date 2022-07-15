package com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.DTO.PostCategory;

import java.util.List;

@Repository
public interface PostCategoryRepository extends JpaRepository<PostCategory,Long>{

//    @Query(value = "SELECT post_id from PostCategory where category_id = ?1", nativeQuery = true)
//    List<Long> getPostId(Long categoryId);
}

