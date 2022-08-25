package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="T_HELPDESK")
@DynamicInsert
@DynamicUpdate
public class Helpdesk {
    @Id
    private int helpdeskIdx;

    @Column(nullable = false)
    private String helpdeskNm;

    @Column(nullable = false)
    private String helpdeskContent;

    @Column(nullable = false)
    private LocalDateTime helpdeskInqDate = LocalDateTime.now();

    @Column(nullable = false,columnDefinition = "char(1)")
    private char helpdeskUseYn = 'N';

    @Column(nullable = false,columnDefinition = "char(1)")
    private char helpdeskYn = 'N';

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;
}
