package com.example.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="bill_detail_id")
public class bill_detail {
	@Id
	@Column(columnDefinition = "TEXT", name = "bill_detail_id", nullable = false)
	@Size(min = 1, max = 30)
	private String bill_detail_id;

	@Column(columnDefinition = "TEXT", name = "bill_id", nullable = false)
	@Size(min = 1, max = 30)
	private String bill_id;

	@Column(columnDefinition = "TEXT", name = "order_id", nullable = false)
	@Size(min = 1, max = 30)
	private String order_id;
	
	@Column(columnDefinition = "TEXT", name = "total_price", nullable = false)
	@Size(min = 1, max = 5)
	private int total_price;
	



}
