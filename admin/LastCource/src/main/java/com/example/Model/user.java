package com.example.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user_db")
public class user {
	@Id
	@Column(columnDefinition = "TEXT", name = "user_id", nullable = false)
	@Size(min = 1, max = 30)
	private String user_id;

	@Column(columnDefinition = "TEXT", name = "level", nullable = false)
	@Size(min = 1, max = 3)
	private int level;

	@Column(columnDefinition = "TEXT", name = "avatar", nullable = false)
	@Size(min = 1, max = 50)
	private String avatar;

	@Column(columnDefinition = "TEXT", name = "fullname", nullable = false)
	@Size(min = 1, max = 20)
	private String fullname;

	@Column(columnDefinition = "TEXT", name = "username", nullable = false)
	@Size(min = 1, max = 30)
	private String username;

	@Column(columnDefinition = "TEXT", name = "password", nullable = false)
	@Size(min = 1, max = 30)
	private String password;

	@Column(columnDefinition = "TEXT", name = "email", nullable = false)
	@Size(min = 1, max = 30)
	private String email;

	@Column(columnDefinition = "TEXT", name = "phone", nullable = false)
	@Size(min = 1, max = 10)
	private int phone;

	@Column(columnDefinition = "TEXT", name = "address", nullable = false)
	@Size(min = 1, max = 30)
	private String address;

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
