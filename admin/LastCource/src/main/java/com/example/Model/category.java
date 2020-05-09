package com.example.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "category_db")
public class category {
	@Id
	@Column(columnDefinition = "TEXT", name = "category_id", nullable = false)
	@Size(min = 1, max = 30)
	private String category_id;

	@Column(columnDefinition = "TEXT", name = "name", nullable = false)
	@Size(min = 1, max = 20)
	private String name;

	public String getCategory_id() {
		return category_id;
	}

	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
