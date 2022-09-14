package com.spring.bearbom.service.course.like.impl;

import com.spring.bearbom.dto.LikeDto;
import com.spring.bearbom.mapper.LikeMapper;
import com.spring.bearbom.service.course.like.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeServiceImpl implements LikeService {

    @Autowired
    LikeMapper likeMapper;

    @Override
    public void like(LikeDto likeDto) {
        likeMapper.like(likeDto);
    }

    @Override
    public void unLike(LikeDto likeDto) {
        likeMapper.unLike(likeDto);
    }

    @Override
    public int readLike(LikeDto likeDto) {
        return likeMapper.readLike(likeDto);
    }

}
