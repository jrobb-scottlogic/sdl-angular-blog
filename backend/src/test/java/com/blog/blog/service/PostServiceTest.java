package com.blog.blog.service;

import com.blog.blog.dto.PostOutputDto;
import com.blog.blog.entity.Post;
import com.blog.blog.entity.Tag;
import com.blog.blog.repository.PostRepository;
import com.blog.blog.repository.TagRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class PostServiceTest {
    @Mock
    private PostRepository postRepository;
    @Mock
    private TagRepository tagRepository;
    @InjectMocks
    private PostService postService;
    private PostOutputDto postOutputDto;
    private Post post;
    private Tag tag1;
    private Tag tag2;

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

        post = Post.builder()
                .id(1)
                .title("Title")
                .body("Body")
                .date(LocalDate.now())
                .thumbnailUrl("http://thumbnail.com")
                .build();

        tag1 = Tag.builder()
                .id(1)
                .post(post)
                .tag("tag")
                .build();

        tag2 = Tag.builder()
                .id(2)
                .post(post)
                .tag("gat")
                .build();
    }

    @Test
    public void fetchAllPosts_returnsPostOutputDtoList(){
        List<PostOutputDto> expectedList = List.of(postOutputDto);
        given(postRepository.findAll()).willReturn(List.of(post));
        given(tagRepository.findAllByPost(post)).willReturn(List.of(tag1,tag2));

        List<PostOutputDto> actualList = postService.fetchAllPosts();

        assertThat(actualList).isEqualTo(expectedList);
    }

    @Test
    public void fetchPostById_validId_returnsPostOutputDto(){
        PostOutputDto expected = postOutputDto;
        given(postRepository.findById(any(Integer.class))).willReturn(Optional.ofNullable(post));
        given(tagRepository.findAllByPost(post)).willReturn(List.of(tag1,tag2));

        PostOutputDto actual = postService.fetchPostById(1);

        assertThat(actual).isEqualTo(expected);
    }
}
