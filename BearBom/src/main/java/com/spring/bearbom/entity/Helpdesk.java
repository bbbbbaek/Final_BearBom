package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="T_helpDesk")
@DynamicInsert
@DynamicUpdate
public class Helpdesk {
    @Id
    private int helpDeskIdx;

    @Column(nullable = false)
    private String helpDeskNm;

    @Column(nullable = false)
    private String helpDeskContent;

    @Column(nullable = false)
    private LocalDateTime helpDeskInqDate = LocalDateTime.now();

    @Column(nullable = false,columnDefinition = "char(1)")
    private char helpDeskUseYn = 'N';

    @Column(nullable = false,columnDefinition = "char(1)")
    private char helpDeskYn = 'N';

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;
}
