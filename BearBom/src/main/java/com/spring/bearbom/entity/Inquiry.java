package com.spring.bearbom.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name="T_INQUIRY")
@Data
@DynamicInsert
@DynamicUpdate
public class Inquiry {
        @Id
        private int inquiryIdx;

        @Column(nullable = false, columnDefinition = "varchar(100)")
        private String inquirySort;

        @Column(nullable = false, columnDefinition = "varchar(300)")
        private String inquiryTitle;

        @Column(nullable = false, columnDefinition = "varchar(2000)")
        private String inquiryContent;

        @Column(nullable = false,columnDefinition = "char(1)")
        private char inquiryUseYn ='Y';

        @Column(nullable = false,columnDefinition = "char(1)")
        private char inquiryYn ='Y';
        
        @Column(nullable = false)
        private LocalDateTime inquiryRegdate = LocalDateTime.now().plusHours(9);

        @ManyToOne
        @JoinColumn(name="USER_ID")
        private User user;

}
