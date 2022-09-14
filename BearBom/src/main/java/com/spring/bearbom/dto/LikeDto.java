package com.spring.bearbom.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LikeDto {
    private String userId;
    private int courseIdx;
    private Long likeId;
    private String likeState;
}
