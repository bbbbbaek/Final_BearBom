package com.spring.bearbom.controller.course;

import com.spring.bearbom.dto.LikeDto;
import com.spring.bearbom.entity.Like;
import com.spring.bearbom.service.course.like.LikeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/like")
@Slf4j
@RequiredArgsConstructor
public class LikeController {

    private final LikeService likeService;

    @GetMapping("/getLikeList")
    public ResponseEntity<LikeDto> readLike(@RequestParam String userId, @RequestParam int courseIdx) {
        System.out.println(userId);
        System.out.println(courseIdx);
        LikeDto likeDto = new LikeDto();
        likeDto.setUserId(userId);
        likeDto.setCourseIdx(courseIdx);

        int like = likeService.readLike(likeDto);
        if(like == 1) {
            likeDto.setLikeState("liked");
        } else {
            likeDto.setLikeState("nolike");
        }

        System.out.println(likeDto);
        return ResponseEntity.ok().body(likeDto);
    }

    //빈하트 클릭 시 하트
    @PostMapping("{id}/insertLike")
    public ResponseEntity<LikeDto> like(@PathVariable(name = "id") int courseIdx, @RequestBody LikeDto likeDto) {
        System.out.println("///////////////////"+courseIdx);
        int like = likeService.readLike(likeDto);

        if(like == 1) {
            likeService.unLike(likeDto);
            likeDto.setLikeState("unLike");
        } else {
            likeService.like(likeDto);
            likeDto.setLikeState("like");
        }
//        return new ResponseEntity<>(likeDto, HttpStatus.CREATED);
        return ResponseEntity.ok().body(likeDto);
    }


//    //빈하트 클릭 시 하트 저장
//    @PostMapping("a")
//    public ResponseEntity<LikeDto> like(@RequestBody LikeDto likeDto) {
//        likeService.like(likeDto);
////        return new ResponseEntity<>(likeDto, HttpStatus.CREATED);
//        return ResponseEntity.ok().body(likeDto);
//    }

    //꽉찬 하트 클릭시 하트 해제
    @PostMapping("b")
    public ResponseEntity<LikeDto> unLike(@RequestBody LikeDto likeDto) {
        likeService.unLike(likeDto);
//        return new ResponseEntity<>(likeDto, HttpStatus.OK);
        return ResponseEntity.ok().body(likeDto);
    }

}
