package com.spring.bearbom.entity;


import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Data
@Table(name="T_GUIDE_FILE")
@IdClass(GuideFileId.class)
@DynamicInsert
@DynamicUpdate
public class GuideFile {

    @Id
    private int guideFileIdx;

    @Column(nullable = false)
    private String guideFileOrgNm;

    @Column(nullable = false)
    private String guideFileNewNm;

    @Column(nullable = false)
    private String guideFilePath;

    @Id
    @ManyToOne
    @JoinColumn(name="GUIDE_IDX")
    private Guide guide;

}
