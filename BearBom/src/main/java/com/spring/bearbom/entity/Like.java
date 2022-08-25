package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="T_LIKE")
@Data
@DynamicInsert
@DynamicUpdate
@IdClass(LikeId.class)
public class Like {
	@Id
	@ManyToOne
	@JoinColumn(name="COURSE_IDX")
	private Course course;

    @Id
    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;
}
