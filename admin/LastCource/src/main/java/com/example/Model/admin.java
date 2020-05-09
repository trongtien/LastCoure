package com.example.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "admin_db")
public class admin {
	@Id
	@Column(columnDefinition = "TEXT", name = "admin_id", nullable = false)
	@Size(min = 1, max = 30)
	private String admin_id;

	@Column(columnDefinition = "TEXT", name = "avartar", nullable = false)
	@Size(min = 1, max = 30)
	private String avartar;

	@Column(columnDefinition = "TEXT", name = "fullname", nullable = false)
	@Size(min = 1, max = 30)
	private String fullname;

	@Column(columnDefinition = "TEXT", name = "username", nullable = false)
	@Size(min = 1, max = 20)
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

	public String getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(String admin_id) {
		this.admin_id = admin_id;
	}

	public String getAvartar() {
		return avartar;
	}

	public void setAvartar(String avartar) {
		this.avartar = avartar;
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
