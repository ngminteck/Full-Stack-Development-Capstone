package com.DTO;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import javax.persistence.*;

@Entity
@Table(name="Post")
public class Post {

	@Column(name = "post_id", nullable = false)
	private @Id @GeneratedValue Long postId;
	@Column(name = "title")
	private String title;
	@Column(name = "header", nullable = false)
	private String header;
	@Column(name = "body", nullable = false)
	private String body;
	@Column(name = "post_date", columnDefinition = "DATE", nullable = false)
	private LocalDate postDate;
	@Column(name = "expiry_date", columnDefinition = "DATE")
	private LocalDate expireDate;

	@Column(name = "is_approved", nullable = false)
	private boolean isApproved;

	@ManyToOne
	@JoinColumn(name = "account_id", nullable = false)
	private User user;

	@ManyToMany
	@JoinTable(name = "postcategory",
		joinColumns = {@JoinColumn(name = "post_id")},
		inverseJoinColumns = {@JoinColumn(name = "category_id")})
	private List<Category> categories;

	@ManyToMany
	@JoinTable(name="image",
		joinColumns = {@JoinColumn(name="post_id")})
	private List<Image> images;

	public Post() {

	}

	public Post(String title, String header,
				String body, LocalDate postDate,
				LocalDate expireDate, boolean isApproved,
				User user) {
		this.title = title;
		this.header = header;
		this.body = body;
		this.postDate = postDate;
		this.expireDate = expireDate;
		this.isApproved = isApproved;
		this.user = user;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Page [postId=" + postId + ", title=" + title + ", header=" + header + ", body=" + body + ", postDate="
				+ postDate + ", ExpireDate=" + expireDate + ", userID=" + user.getUserID() + "]";
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
