package com.DTO;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="PostCategory")
public class PostCategory {

	@Column(name = "post_id")
	private Long postId;
	
	@Column(name = "category_id")
	private Long categoryId;

	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	@Override
	public String toString() {
		return "PostCategory [postId=" + postId + ", categoryId=" + categoryId + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(categoryId, postId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PostCategory other = (PostCategory) obj;
		return Objects.equals(categoryId, other.categoryId) && Objects.equals(postId, other.postId);
	}
	
	
}
