package com.example.Model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "bill_DB")
public class bill {
	@Id
	@Column(columnDefinition = "TEXT", name = "bill_id", nullable = false)
	@Size(min = 1, max = 30)
	private String bill_id;

	@Column(columnDefinition = "TEXT", name = "user_id", nullable = false)
	@Size(min = 1, max = 30)
	private String user_id;

	@Column(columnDefinition = "TEXT", name = "status", nullable = false)
	@Size(min = 1, max = 2)
	private int status;

	private List<user> user = new ArrayList<user>();

	public String getBill_id() {
		return bill_id;
	}

	public void setBill_id(String bill_id) {
		this.bill_id = bill_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public List<user> getUser() {
		return user;
	}

	public void setUser(List<user> user) {
		this.user = user;
	}

}
