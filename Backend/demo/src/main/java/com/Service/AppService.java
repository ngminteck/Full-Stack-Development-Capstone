package com.Service;

import java.util.List;
import java.util.Optional;

public interface AppService<T> {
    List<T> getAll();
    Optional<T> getById(Long id);
    T create(T t);
    void delete(Long id);
}
