package com.spring.bearbom.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class LikeId implements Serializable {
    private int course;
    private String user;
}
