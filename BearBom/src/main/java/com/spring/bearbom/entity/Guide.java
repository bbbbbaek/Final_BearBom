package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="T_GUIDE")
@Data
@DynamicInsert
@DynamicUpdate
public class Guide {

    @Id
    private int guideIdx;

    @Column(nullable = false, columnDefinition = "varchar(2000)")
    private String guideContent;

    @Column(nullable = false)
    private LocalDateTime guideRegdate = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime guideMdfdate = LocalDateTime.now();

    @Column(nullable = false,columnDefinition = "char(1)")
    private char guideUseYn ='N';

}
