package com.DTO;

import java.io.Serializable;


public class CompositeCatIDAndPostID implements Serializable {
	private Long postId;

	private Long categoryId;

	public CompositeCatIDAndPostID(Long postId, Long categoryId) {
		super();
		this.postId = postId;
		this.categoryId = categoryId;
	}

    // default constructor
	

    // equals() and hashCode()
}
