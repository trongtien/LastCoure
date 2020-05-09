package com.example.Model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "order_db")
public class order {
	@Id
	@Column(columnDefinition = "TEXT", name = "order_id", nullable = false)
	@Size(min = 1, max = 30)
	private String order_id;

	public String getOrder_id() {
		return order_id;
	}

	public void setOrder_id(String order_id) {
		this.order_id = order_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getStatus_order_id() {
		return status_order_id;
	}

	public void setStatus_order_id(String status_order_id) {
		this.status_order_id = status_order_id;
	}

	public List<user> getUser() {
		return user;
	}

	public void setUser(List<user> user) {
		this.user = user;
	}

	public List<status_order> getStatus() {
		return status;
	}

	public void setStatus(List<status_order> status) {
		this.status = status;
	}

	@Column(columnDefinition = "TEXT", name = "user_id", nullable = false)
	@Size(min = 1, max = 30)
	private String user_id;

	@Column(columnDefinition = "TEXT", name = "status_order_id", nullable = false)
	@Size(min = 1, max = 30)
	private String status_order_id;

	private List<user> user = new ArrayList<user>();
	
	private List<status_order> status = new ArrayList<status_order>();
}
