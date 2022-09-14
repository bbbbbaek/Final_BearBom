package com.spring.bearbom.service.course.like;

import com.spring.bearbom.dto.LikeDto;

public interface LikeService {
    void like(LikeDto likeDto);

    void unLike(LikeDto likeDto);

    int readLike(LikeDto likeDto);
}
