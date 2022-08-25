package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name="T_COURSER")
@IdClass(CourserId.class)
@DynamicInsert
@DynamicUpdate
public class Courser {
    @Id
    private int courserIdx;

    @Column(nullable = false, columnDefinition = "varchar(2000)")
    private String courserContent;

    @Column(nullable = false)
    private String courserRate;

    @Column(nullable = false)
    private LocalDateTime courserRegdate = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime courserMdfdate = LocalDateTime.now();

    @Column(nullable = false,columnDefinition = "char(1)")
    private char courserUseYn ='N';

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;

    @Id
    @ManyToOne
    @JoinColumn(name="COURSE_IDX")
    private Course course;
}
