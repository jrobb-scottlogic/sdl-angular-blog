package com.blog.blog.service;

import com.blog.blog.dto.PostOutputDto;
import com.blog.blog.entity.Post;
import com.blog.blog.entity.Tag;
import com.blog.blog.repository.PostRepository;
import com.blog.blog.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final TagRepository tagRepository;

    public PostOutputDto savePost(Post post, List<Tag> tags) {
        try {
            Post newPost = postRepository.save(post);
            List<Tag> newTags = tagRepository.saveAll(tags);

            List<String> tagStrings = new ArrayList<>();
            for (Tag tag: newTags) {
                tagStrings.add(tag.getTag());
            }

            PostOutputDto outputDto = PostOutputDto.builder()
                    .id(newPost.getId())
                    .title(newPost.getTitle())
                    .body(newPost.getBody())
                    .date(newPost.getDate())
                    .thumbnailUrl(newPost.getThumbnailUrl())
                    .tags(tagStrings)
                    .build();

            return outputDto;

        } catch (Exception e) {
            throw new RuntimeException("failed to add post: " + e.getMessage());
        }
    }
    public PostOutputDto fetchPostById(Integer id){
        try{
            Optional<Post> post = postRepository.findById(id);
            if(post.isPresent()){
                List<Tag> tags = tagRepository.findAllByPost(post.get());
                List<String> tagStrings = new ArrayList<>();
                for (Tag tag: tags) {
                    tagStrings.add(tag.getTag());
                }
                PostOutputDto outputDto = PostOutputDto.builder()
                        .id(post.get().getId())
                        .title(post.get().getTitle())
                        .body(post.get().getBody())
                        .date(post.get().getDate())
                        .thumbnailUrl(post.get().getThumbnailUrl())
                        .tags(tagStrings)
                        .build();

                return outputDto;
            }else{
                throw new RuntimeException("No posts with matching ID");
            }
        }
        catch(Exception e){
            throw new RuntimeException("Failed to fetch post by id: " + e.getMessage());
        }
    }

    public List<PostOutputDto> fetchPostsByTag(String tag){
      try {
        List<PostOutputDto> outputList = new ArrayList<>();
        List<Tag> matchingPosts = tagRepository.findAllByTag(tag);
        if (!matchingPosts.isEmpty()){
          for (Tag post: matchingPosts) {
            Post tempPost = post.getPost();
            PostOutputDto outputDto = PostOutputDto.builder()
              .id(tempPost.getId())
              .title(tempPost.getTitle())
              .body(tempPost.getBody())
              .date(tempPost.getDate())
              .thumbnailUrl(tempPost.getThumbnailUrl())
              .tags(tagRepository.findAllByPost(tempPost).stream().map(Tag::getTag).collect(Collectors.toList()))
              .build();
            outputList.add(outputDto);
          }
        }else{
          throw new RuntimeException("No posts with matching tag");
        }
        return outputList;
      }catch (Exception e){
        throw new RuntimeException("Failed to fetch posts by tag: " + e.getMessage());
      }
    }

    public List<PostOutputDto> fetchAllPosts(){
        try{
            List<Post> postList = postRepository.findAllByOrderByDateDescIdDesc();
            List<PostOutputDto> outputList = new ArrayList<>();
            for (Post post: postList) {
                List<Tag> tags = tagRepository.findAllByPost(post);
                List<String> tagStrings = new ArrayList<>();
                for (Tag tag: tags) {
                    tagStrings.add(tag.getTag());
                }
                PostOutputDto postOutputDto = new PostOutputDto();
                postOutputDto.setId(post.getId());
                postOutputDto.setTitle(post.getTitle());
                postOutputDto.setBody(post.getBody());
                postOutputDto.setDate(post.getDate());
                postOutputDto.setThumbnailUrl(post.getThumbnailUrl());
                postOutputDto.setTags(tagStrings);
                outputList.add(postOutputDto);
            }
            return outputList;
        } catch(Exception e){
            throw new RuntimeException("Failed to fetch all posts: " + e.getMessage());
        }
    }
}
