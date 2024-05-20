package com.blog.blog.controller;

import com.blog.blog.dto.PostInputDto;
import com.blog.blog.dto.PostOutputDto;
import com.blog.blog.entity.Post;
import com.blog.blog.entity.Tag;
import com.blog.blog.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping("/all")
    public ResponseEntity<List<PostOutputDto>> getAllPosts(){
        List<PostOutputDto> posts = postService.fetchAllPosts();
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<PostOutputDto> getPostById(@PathVariable String id){
        PostOutputDto post = postService.fetchPostById(Integer.parseInt(id));
        return ResponseEntity.ok(post);
    }

    @GetMapping("/tag/{tag}")
    public ResponseEntity<List<PostOutputDto>> getPostByTag(@PathVariable String tag) {
      List<PostOutputDto> posts = postService.fetchPostsByTag(tag);
      return ResponseEntity.ok(posts);
    }
    @PostMapping("/new")
    public ResponseEntity<PostOutputDto> addNewPost(@RequestBody PostInputDto userInput){
        Post post = Post.builder()
                .title(userInput.getTitle())
                .body(userInput.getBody())
                .thumbnailUrl("fakeURL")
                .date(LocalDate.now()).build();

        Tag tag = Tag.builder().tag("Hiya").post(post).build();
        PostOutputDto postOut = postService.savePost(post,List.of(tag));
        return ResponseEntity.ok(postOut);
    }


}
