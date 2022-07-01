package com.DTO;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Post")
public class Page {

	@Column(name = "postId")
	private @Id @GeneratedValue Long postId;
	@Column(name = "title")
	private StringBuilder title;
	@Column(name = "header")
	private StringBuilder header;
	@Column(name = "body")
	private StringBuilder body;
	
	private StringBuilder author;

	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}

	public StringBuilder getTitle() {
		return title;
	}

	public void setTitle(StringBuilder title) {
		this.title = title;
	}

	public StringBuilder getHeader() {
		return header;
	}

	public void setHeader(StringBuilder header) {
		this.header = header;
	}

	public StringBuilder getBody() {
		return body;
	}

	public void setBody(StringBuilder body) {
		this.body = body;
	}

	public StringBuilder getAuthor() {
		return author;
	}

	public void setAuthor(StringBuilder author) {
		this.author = author;
	}

	@Override
	public String toString() {
		return "Page [postId=" + postId + ", title=" + title + ", header=" + header + ", body=" + body + ", author="
				+ author + "]";
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
		Page other = (Page) obj;
		return Objects.equals(postId, other.postId);
	}
	
	
	
}
