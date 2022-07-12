package com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DTO.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long>{

}
