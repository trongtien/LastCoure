package com.example.Model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "product_db")
public class product {

	@Id
	@Size(min = 1, max = 30)
	@Column(columnDefinition = "TEXT", name = "product_id", nullable = false)
	private String product_id;

	@Size(min = 1, max = 30)
	@Column(columnDefinition = "TEXT", name = "category_id", nullable = false)
	private String category_id;

	@Size(min = 1, max = 30)
	@Column(columnDefinition = "TEXT", name = "product_name", nullable = false)
	private String product_name;

	@Size(min = 1, max = 5)
	@Column(columnDefinition = "TEXT", name = "price", nullable = false)
	private int price;

	@Size(min = 1, max = 3)
	@Column(columnDefinition = "TEXT", name = "discount")
	private int discount;

	@Size(min = 1, max = 10)
	@Column(columnDefinition = "TEXT", name = "amount", nullable = false)
	private int amount;

	@Size(min = 1, max = 80)
	@Column(columnDefinition = "TEXT", name = "image", nullable = false)
	private String image;

	@Size(min = 1, max = 30)
	@Column(columnDefinition = "TEXT", name = "status_product_id", nullable = false)
	private String status_product_id;

	@Column(columnDefinition = "TEXT", name = "content", nullable = false)
	private String content;

	private List<category> Category = new ArrayList<category>();
	
	private List<status_product> statusProduct= new ArrayList<status_product>();
	
	public List<status_product> getStatusProduct() {
		return statusProduct;
	}

	public void setStatusProduct(List<status_product> statusProduct) {
		this.statusProduct = statusProduct;
	}

	public String getProduct_id() {
		return product_id;
	}

	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}

	public String getCategory_id() {
		return category_id;
	}

	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getStatus_product_id() {
		return status_product_id;
	}

	public void setStatus_product_id(String status_product_id) {
		this.status_product_id = status_product_id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public List<category> getCategory() {
		return Category;
	}

	public void setCategory(List<category> category) {
		Category = category;
	}
}
