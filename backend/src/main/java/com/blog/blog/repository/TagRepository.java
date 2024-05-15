package com.blog.blog.repository;

import com.blog.blog.entity.Post;
import com.blog.blog.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Integer> {
    List<Tag> findAllByPost(Post post);
}
