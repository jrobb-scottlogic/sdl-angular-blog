package com.blog.blog.controller;

import com.blog.blog.dto.PostOutputDto;
import com.blog.blog.service.PostService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class PostControllerTest {
    @Mock
    private PostService postService;

    @InjectMocks
    private PostController postController;

    private PostOutputDto postOutputDto;

    @BeforeEach
    public void setUp(){
        postOutputDto = PostOutputDto.builder()
                .id(1)
                .title("Title")
                .body("Body")
                .date(LocalDate.now())
                .thumbnailUrl("http://thumbnail.com")
                .tags(List.of("tag","gat"))
                .build();
    }

    @Test
    public void getAllPosts_returnsPostOutputDtoList(){
        when(postService.fetchAllPosts()).thenReturn(List.of(postOutputDto));
        ResponseEntity<List<PostOutputDto>> response = postController.getAllPosts();
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo((List.of(postOutputDto)));
    }

    @Test
    public void getPostById_validId_returnsPostOutputDto(){
        when(postService.fetchPostById(any(Integer.class))).thenReturn(postOutputDto);
        ResponseEntity<PostOutputDto> response = postController.getPostById("1");
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo(postOutputDto);
    }
}
