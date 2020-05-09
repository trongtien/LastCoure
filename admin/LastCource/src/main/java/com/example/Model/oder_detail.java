package com.example.Model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "order_detail_db")
public class oder_detail {
	@Id
	@Column(columnDefinition = "TEXT", name = "order_detail_id", nullable = false)
	@Size(min = 1, max = 30)
	private String order_detail_id;

	@Column(columnDefinition = "TEXT", name = "order_id", nullable = false)
	@Size(min = 1, max = 30)
	private String order_id;

	@Column(columnDefinition = "TEXT", name = "product_id", nullable = false)
	@Size(min = 1, max = 30)
	private String product_id;

	@Column(columnDefinition = "TEXT", name = "amount", nullable = false)
	@Size(min = 1, max = 4)
	private int amount;

	@Column(columnDefinition = "TEXT", name = "note", nullable = false)
	@Size(min = 1, max = 4)
	private int note;

	private List<order> order = new ArrayList<order>();
	
	private List<product> product = new ArrayList<product>();

	public String getOrder_detail_id() {
		return order_detail_id;
	}

	public void setOrder_detail_id(String order_detail_id) {
		this.order_detail_id = order_detail_id;
	}

	public String getOrder_id() {
		return order_id;
	}

	public void setOrder_id(String order_id) {
		this.order_id = order_id;
	}

	public String getProduct_id() {
		return product_id;
	}

	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getNote() {
		return note;
	}

	public void setNote(int note) {
		this.note = note;
	}

	public List<order> getOrder() {
		return order;
	}

	public void setOrder(List<order> order) {
		this.order = order;
	}

	public List<product> getProduct() {
		return product;
	}

	public void setProduct(List<product> product) {
		this.product = product;
	}
}
