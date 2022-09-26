package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="T_INQUIRY")
@Data
@DynamicInsert
@DynamicUpdate
public class Inquiry {
        @Id
        private int inquiryIdx;

//        @Column(nullable = false, columnDefinition = "varchar(100)")
//        private String inquiryEmail;

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
        private LocalDateTime inquiryRegdate = LocalDateTime.now();
        
        @Column(nullable = true)
        private LocalDateTime replyRegdate = LocalDateTime.now();
        
        @Column(columnDefinition = "char(1)")
        private char replyYn ='N';
        
        @Column(columnDefinition = "varchar(300)")
        private String replyTitle;

        @Column(columnDefinition = "varchar(2000)")
        private String replyContent;

//        @Column(nullable = false,columnDefinition = "char(1)")
//        private char inquiryReplyYn ='N';
//
//        @Column(nullable = false, columnDefinition = "varchar(2000)")
//        private String inquiryReplyContent;
//
//        @Column(nullable = false)
//        private LocalDateTime inquiryReplyDate = LocalDateTime.now();






        @ManyToOne
        @JoinColumn(name="USER_ID")
        private User user;





}
