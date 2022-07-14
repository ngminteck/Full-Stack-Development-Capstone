package com.DTO;

import java.util.List;
import java.util.Objects;

import javax.persistence.*;

@Entity
@Table(name="Category")
public class Category 
{
	@Column(name = "category_id")
	private @Id @GeneratedValue Long categoryId;
	@Column(name = "category_name")
	private String categoryName;

	@ManyToMany(mappedBy = "categories")
	private List<Post> posts;
	
	

	public Category(String categoryName) {
		super();
		this.categoryName = categoryName;
	}
	public Long getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", categoryName=" + categoryName + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(categoryId);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Category other = (Category) obj;
		return Objects.equals(categoryId, other.categoryId);
	}
	
	
}
