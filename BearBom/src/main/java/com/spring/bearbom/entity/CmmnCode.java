package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="T_CMMN_CODE")
@Data
@DynamicInsert
@DynamicUpdate
public class CmmnCode {
    @Id
    private String cmmnCodeIdx;

    private String cmmnCodeNm;
}
