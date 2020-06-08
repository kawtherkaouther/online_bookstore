package org.sid.onlinebookstore.repository;

import org.sid.onlinebookstore.entity.Book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="book" , path="book")
public interface BookRepository extends JpaRepository<Book , Long>{

}
