package com.example.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="status_product_db")
public class status_product {
	@Id
	@Column(columnDefinition = "TEXT", name = "status_product_id", nullable = false)
	@Size(min = 1, max = 30)
	private String status_order_id;

	public String getStatus_order_id() {
		return status_order_id;
	}

	public void setStatus_order_id(String status_order_id) {
		this.status_order_id = status_order_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(columnDefinition = "TEXT", name = "name", nullable = false)
	@Size(min = 1, max = 20)
	private String name;

}
