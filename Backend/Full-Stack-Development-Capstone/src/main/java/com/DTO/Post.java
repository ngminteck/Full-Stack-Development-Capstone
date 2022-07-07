package com.DTO;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Post")
public class Post {

	@Column(name = "post_id")
	private @Id @GeneratedValue Long postId;
	@Column(name = "title")
	private String title;
	@Column(name = "header")
	private String header;
	@Column(name = "body")
	private String body;
	@Column(name = "post_date", columnDefinition = "DATE")
	private LocalDate postDate;
	@Column(name = "expiry_date", columnDefinition = "DATE")
	private LocalDate expireDate;

	@Column(name = "is_approved")
	private boolean isApproved;

	@Column(name = "user_id")
	private Long userID;

	public Post() {

	}

	public Post(String title, String header,
				String body, LocalDate postDate,
				LocalDate expireDate, boolean isApproved,
				Long userID) {
		this.title = title;
		this.header = header;
		this.body = body;
		this.postDate = postDate;
		this.expireDate = expireDate;
		this.isApproved = isApproved;
		this.userID = userID;
	}

	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getHeader() {
		return header;
	}

	public void setHeader(String header) {
		this.header = header;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public LocalDate getPostDate() {
		return postDate;
	}

	public void setPostDate(LocalDate postDate) {
		this.postDate = postDate;
	}

	public LocalDate getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(LocalDate expireDate) {
		this.expireDate = expireDate;
	}

	public boolean isApproved() {
		return isApproved;
	}

	public void setApproved(boolean approved) {
		isApproved = approved;
	}

	public Long getUserID() {
		return userID;
	}

	public void setUserID(Long userID) {
		this.userID = userID;
	}

	@Override
	public String toString() {
		return "Page [postId=" + postId + ", title=" + title + ", header=" + header + ", body=" + body + ", postDate="
				+ postDate + ", ExpireDate=" + expireDate + ", userID=" + userID + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(postId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Post other = (Post) obj;
		return Objects.equals(postId, other.postId);
	}

   
	
	
}
