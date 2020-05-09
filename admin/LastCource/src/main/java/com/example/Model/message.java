package com.example.Model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="message_db")
public class message {
	@Id
	@Column(columnDefinition = "TEXT", name = "message_id", nullable = false)
	@Size(min = 1, max = 30)
	private String message_id;

	@Column(columnDefinition = "TEXT", name = "user_id", nullable = false)
	@Size(min = 1, max = 30)
	private String user_id;

	@Column(columnDefinition = "TEXT", name = "text", nullable = false)
	@Size(min = 1, max = 100)
	private String text;

	private List<user> user = new ArrayList<user>();

	public String getMessage_id() {
		return message_id;
	}

	public void setMessage_id(String message_id) {
		this.message_id = message_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<user> getUser() {
		return user;
	}

	public void setUser(List<user> user) {
		this.user = user;
	}
}
