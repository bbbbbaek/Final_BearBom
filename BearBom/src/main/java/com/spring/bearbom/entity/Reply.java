package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="T_REPLY")
@Data
@DynamicInsert
@DynamicUpdate
public class Reply {

    @Id
    private int replyIdx;

    @Column(nullable = false, columnDefinition = "varchar(2000)")
    private String replyContent;

    @Column(nullable = false)
    private LocalDateTime replyInqDate = LocalDateTime.now();

    @Column(nullable = false,columnDefinition = "char(1)")
    private char replyUseYn = 'N';

    @Column(nullable = false)
    private int replyParent;

    @Column(nullable = false)
    private int replyLevel = 0;

    @Column(nullable = false)
    private int replyGroup;

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name="HELPDESK_IDX")
    private Helpdesk helpdesk;
}
