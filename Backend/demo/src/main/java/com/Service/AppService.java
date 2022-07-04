package com.Service;

import java.util.List;

public interface AppService<T> {
    List<T> getAll();
    T create(T t);
    void delete(Long id);
}
