package com.example.Model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="comment_db")
public class comment {
	@Id
	@Column(columnDefinition = "TEXT", name = "comment_id", nullable = false)
	@Size(min = 1, max = 30)
	private String comment_id;

	@Column(columnDefinition = "TEXT", name = "product_id", nullable = false)
	@Size(min = 1, max = 30)
	private String product_id;

	@Column(columnDefinition = "TEXT", name = "user_id", nullable = false)
	@Size(min = 1, max = 30)
	private String user_id;

	@Column(columnDefinition = "TEXT", name = "content", nullable = false)
	private String content;
	
	private List<product> product = new ArrayList<product>();
	
	private List<user> user = new ArrayList<user>(); 

	public List<product> getProduct() {
		return product;
	}

	public void setProduct(List<product> product) {
		this.product = product;
	}

	public List<user> getUser() {
		return user;
	}

	public void setUser(List<user> user) {
		this.user = user;
	}

	public String getComment_id() {
		return comment_id;
	}

	public void setComment_id(String comment_id) {
		this.comment_id = comment_id;
	}

	public String getProduct_id() {
		return product_id;
	}

	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}


}
