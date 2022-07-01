package com.Repository;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DTO.Post;

@Repository
public interface PostRepository extends JpaRepository<Post,Long>{

	
}
