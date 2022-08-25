package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="T_COURSE_CONTENT_FILE")
@Data
@DynamicInsert
@DynamicUpdate
@IdClass(CourseContentFileId.class)
public class CourseContentFile {
    @Id
    private int courseContentFileIdx;

    @Column(nullable = false)
    private String courseContentFileOrgNm;

    @Column(nullable = false)
    private String courseContentFileNewNm;

    @Column(nullable = false)
    private String courseContentFilePath;

    @Id
    @ManyToOne
    @JoinColumn(name="COURSE_IDX")
    private Course course;
}
