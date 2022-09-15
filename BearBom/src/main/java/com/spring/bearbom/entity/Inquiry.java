package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="T_INQUIRY")
@Data
@DynamicInsert
@DynamicUpdate
public class Inquiry {
        @Id
        private int inquiryIdx;

        @Column(nullable = false, columnDefinition = "varchar(100)")
        private String inquiryEmail;

        @Column(nullable = false, columnDefinition = "varchar(100)")
        private String inquirySort;

        @Column(nullable = false, columnDefinition = "varchar(300)")
        private String inquiryTitle;

        @Column(nullable = false, columnDefinition = "varchar(2000)")
        private String inquiryContent;





}

