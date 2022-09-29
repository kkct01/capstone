package com.movie.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.backend.entity.Item;
import com.movie.backend.repository.ItemRepo;

@Service
public class ItemService {
	
	@Autowired
	private ItemRepo repo;
	
	public Item saveItem(Integer uId, Integer mId) {
		Item item = new Item();
		item.setuId(uId);
		item.setmId(mId);
		return repo.save(item);	
	}
	
	
	public List<Item> findByUId(Integer uId) {
		return repo.findByUId(uId);
	}

}
