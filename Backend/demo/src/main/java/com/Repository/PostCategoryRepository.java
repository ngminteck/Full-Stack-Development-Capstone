package com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DTO.PostCategory;

@Repository
public interface PostCategoryRepository extends JpaRepository<PostCategory,Long>{

}

